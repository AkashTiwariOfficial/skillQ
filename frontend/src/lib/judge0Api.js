// Judge0 API client — robust version
//
// Handles: request timeouts, rate limiting (429) with backoff, exponential
// polling backoff, cancellation via AbortController, input validation,
// and clear separation of error types (network / config / compile / runtime).
//
// SECURITY NOTE: RAPIDAPI_KEY is read from a Vite env var, which means it
// ships inside your client bundle and is visible to anyone who opens
// devtools. That's fine for local dev/tutorials. Before deploying publicly,
// move these calls behind a small backend/serverless proxy that holds the
// key server-side.

const JUDGE0_API = "https://judge0-ce.p.rapidapi.com";
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = "judge0-ce.p.rapidapi.com";

const LANGUAGE_CONFIG = {
  javascript: { languageId: 63, extension: "js" },
  python: { languageId: 71, extension: "py" },
  java: { languageId: 62, extension: "java" },
  cpp: { languageId: 54, extension: "cpp" }, // C++ (GCC 9.2.0)
  c: { languageId: 50, extension: "c" }, // C (GCC 9.2.0)
  csharp: { languageId: 51, extension: "cs" }, // C# (Mono 6.6.0.161)
  bash: { languageId: 46, extension: "sh" }, // Bash (5.0.0)
  go: { languageId: 60, extension: "go" }, // Go (1.13.5)
  typescript: { languageId: 74, extension: "ts" }, // TypeScript (3.7.4)
};

// Judge0 status IDs: 1=In Queue, 2=Processing, 3=Accepted, 4=Wrong Answer,
// 5=Time Limit Exceeded, 6=Compilation Error, 7-12=various runtime errors,
// 13=Internal Error, 14=Exec Format Error
const STATUS = {
  IN_QUEUE: 1,
  PROCESSING: 2,
  ACCEPTED: 3,
  COMPILATION_ERROR: 6,
};

const DEFAULT_OPTIONS = {
  maxPollAttempts: 20,
  pollIntervalMs: 1000,
  pollBackoffFactor: 1.15, // polling interval grows slightly each attempt
  requestTimeoutMs: 10000, // per-HTTP-request timeout
  maxRetries: 2, // retries for transient network/5xx/429 errors
  retryBaseDelayMs: 500,
};

/**
 * Execute code using Judge0.
 *
 * @param {string} language - one of the keys in LANGUAGE_CONFIG
 * @param {string} code - source code to run
 * @param {string} [stdin] - optional stdin fed to the program
 * @param {object} [options]
 * @param {AbortSignal} [options.signal] - allows the caller to cancel (e.g. user navigates away)
 * @param {number} [options.maxPollAttempts]
 * @param {number} [options.pollIntervalMs]
 * @param {number} [options.requestTimeoutMs]
 * @returns {Promise<{
 *   success: boolean,
 *   output?: string,
 *   error?: string,
 *   errorType?: "config" | "validation" | "network" | "compile" | "runtime" | "timeout" | "cancelled"
 * }>}
 */
export async function executeCode(language, code, stdin = "", options = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  // -------------------------------
  // Validate inputs
  // -------------------------------
  const languageConfig = LANGUAGE_CONFIG[language];
  if (!languageConfig) {
    return {
      success: false,
      error: `Unsupported language: ${language}. Supported: ${Object.keys(LANGUAGE_CONFIG).join(", ")}`,
      errorType: "validation",
    };
  }

  if (typeof code !== "string" || code.trim().length === 0) {
    return {
      success: false,
      error: "No code provided to execute.",
      errorType: "validation",
    };
  }

  if (!RAPIDAPI_KEY) {
    return {
      success: false,
      error: "RapidAPI key is missing. Set VITE_RAPIDAPI_KEY in your .env file and restart the dev server.",
      errorType: "config",
    };
  }

  try {
    // -------------------------------
    // Create submission (with retry on transient failures)
    // -------------------------------
    const submissionData = await fetchJsonWithRetry(
      `${JUDGE0_API}/submissions?base64_encoded=false&wait=false`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageConfig.languageId,
          stdin,
          cpu_time_limit: 2,
          wall_time_limit: 5,
          memory_limit: 128000,
        }),
      },
      opts
    );

    const token = submissionData.token;
    if (!token) {
      return {
        success: false,
        error: "Judge0 did not return a submission token.",
        errorType: "network",
      };
    }

    // -------------------------------
    // Poll for result
    // -------------------------------
    const result = await pollForResult(token, opts);

    // -------------------------------
    // Interpret result
    // -------------------------------
    const output = result.stdout || "";
    const stderr = result.stderr || "";
    const compileOutput = result.compile_output || "";
    const message = result.message || "";
    const statusId = result.status?.id;
    const statusDescription = result.status?.description || "Unknown status";

    if (statusId === STATUS.ACCEPTED) {
      return { success: true, output: output || "No output" };
    }

    if (statusId === STATUS.COMPILATION_ERROR) {
      return {
        success: false,
        output,
        error: compileOutput || "Compilation error",
        errorType: "compile",
      };
    }

    if (stderr) {
      return { success: false, output, error: stderr, errorType: "runtime" };
    }

    return {
      success: false,
      output,
      error: message || statusDescription,
      errorType: "runtime",
    };
  } catch (error) {
    if (error.name === "AbortError") {
      return {
        success: false,
        error: "Execution was cancelled.",
        errorType: "cancelled",
      };
    }
    if (error.name === "TimeoutError") {
      return {
        success: false,
        error: "Execution timed out waiting for Judge0.",
        errorType: "timeout",
      };
    }
    console.error("Judge0 error:", error);
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
      errorType: "network",
    };
  }
}

/**
 * Poll Judge0 until the submission finishes, with mild backoff so we don't
 * hammer the API on long-running jobs.
 */
async function pollForResult(token, opts) {
  let interval = opts.pollIntervalMs;

  for (let attempt = 0; attempt < opts.maxPollAttempts; attempt++) {
    const result = await fetchJsonWithRetry(
      `${JUDGE0_API}/submissions/${token}?base64_encoded=false`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
      },
      opts
    );

    const statusId = result.status?.id;

    if (statusId === STATUS.IN_QUEUE || statusId === STATUS.PROCESSING) {
      await sleep(interval, opts.signal);
      interval = Math.min(interval * opts.pollBackoffFactor, 3000);
      continue;
    }

    return result;
  }

  const timeoutError = new Error("Execution timed out");
  timeoutError.name = "TimeoutError";
  throw timeoutError;
}

/**
 * fetch + parse JSON, with:
 * - a per-request timeout (via AbortController, merged with caller's signal)
 * - retry with exponential backoff on network errors, 429, and 5xx
 */
async function fetchJsonWithRetry(url, init, opts) {
  let lastError;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    const timeoutController = new AbortController();
    const timeoutId = setTimeout(
      () => timeoutController.abort(),
      opts.requestTimeoutMs
    );

    // Merge caller-provided cancellation with our per-request timeout.
    const onCallerAbort = () => timeoutController.abort();
    if (opts.signal) {
      if (opts.signal.aborted) timeoutController.abort();
      else opts.signal.addEventListener("abort", onCallerAbort);
    }

    try {
      const response = await fetch(url, {
        ...init,
        signal: timeoutController.signal,
      });

      if (response.status === 429 || response.status >= 500) {
        const text = await safeText(response);
        throw new RetryableError(
          `Judge0 request failed: ${response.status} ${text}`
        );
      }

      if (!response.ok) {
        const text = await safeText(response);
        throw new Error(`Judge0 request failed: ${response.status} ${text}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;

      // Caller explicitly cancelled — don't retry, propagate immediately.
      if (opts.signal?.aborted) {
        const abortError = new Error("Cancelled");
        abortError.name = "AbortError";
        throw abortError;
      }

      // Our own timeout fired — treat as retryable network hiccup.
      const isTimeout = error.name === "AbortError";
      const isRetryable = isTimeout || error instanceof RetryableError;

      if (isRetryable && attempt < opts.maxRetries) {
        const delay = opts.retryBaseDelayMs * 2 ** attempt;
        await sleep(delay, opts.signal);
        continue;
      }

      if (isTimeout) {
        const timeoutError = new Error(
          `Judge0 request timed out after ${opts.requestTimeoutMs}ms`
        );
        timeoutError.name = "TimeoutError";
        throw timeoutError;
      }

      throw error;
    } finally {
      clearTimeout(timeoutId);
      if (opts.signal) opts.signal.removeEventListener("abort", onCallerAbort);
    }
  }

  throw lastError;
}

class RetryableError extends Error {}

async function safeText(response) {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    if (signal) {
      signal.addEventListener(
        "abort",
        () => {
          clearTimeout(timer);
          const err = new Error("Cancelled");
          err.name = "AbortError";
          reject(err);
        },
        { once: true }
      );
    }
  });
}