// lib/jdoodle.js
// Frontend client — calls YOUR OWN backend (server/index.js), not JDoodle
// directly. This avoids JDoodle's CORS block and keeps clientSecret off
// the browser entirely.

// Set this to your backend's URL. In dev, that's your local Express
// server; in production, your deployed backend URL (e.g. Render).
const BACKEND_EXECUTE_URL =
  import.meta.env.VITE_BACKEND_URL
    ? `${import.meta.env.VITE_BACKEND_URL}/api/execute`
    : "http://localhost:3001/api/execute";

const DEFAULT_EXEC_OPTIONS = {
  requestTimeoutMs: 20000, // a little extra room since this now hops through your backend too
  maxRetries: 2,
  retryBaseDelayMs: 500,
};

class RetryableError extends Error {}

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

async function safeText(response) {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

/**
 * fetch + parse JSON, with a per-request timeout (AbortController, merged
 * with caller's signal) and retry-with-backoff on network errors, 429, 5xx.
 */
async function fetchJsonWithRetry(url, init, opts) {
  let lastError;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    const timeoutController = new AbortController();
    const timeoutId = setTimeout(
      () => timeoutController.abort(),
      opts.requestTimeoutMs
    );

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
        throw new RetryableError(`Backend request failed: ${response.status} ${text}`);
      }

      if (!response.ok) {
        const text = await safeText(response);
        throw new Error(`Backend request failed: ${response.status} ${text}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;

      if (opts.signal?.aborted) {
        const abortError = new Error("Cancelled");
        abortError.name = "AbortError";
        throw abortError;
      }

      const isTimeout = error.name === "AbortError";
      const isRetryable = isTimeout || error instanceof RetryableError;

      if (isRetryable && attempt < opts.maxRetries) {
        const delay = opts.retryBaseDelayMs * 2 ** attempt;
        await sleep(delay, opts.signal);
        continue;
      }

      if (isTimeout) {
        const timeoutError = new Error(`Request timed out after ${opts.requestTimeoutMs}ms`);
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

/**
 * Execute code via your own backend, which proxies to JDoodle.
 *
 * @param {string} language
 * @param {string} code
 * @param {string} [stdin]
 * @param {object} [options]
 * @param {AbortSignal} [options.signal]
 * @returns {Promise<{success:boolean, output?:string, error?:string, errorType?:string}>}
 */
export async function executeCode(language, code, stdin = "", options = {}) {
  const opts = { ...DEFAULT_EXEC_OPTIONS, ...options };

  if (typeof code !== "string" || code.trim().length === 0) {
    return { success: false, error: "No code provided to execute.", errorType: "validation" };
  }

  try {
    const data = await fetchJsonWithRetry(
      BACKEND_EXECUTE_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code, stdin }),
      },
      opts
    );

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      return { success: false, error: "Execution was cancelled.", errorType: "cancelled" };
    }
    if (error.name === "TimeoutError") {
      return { success: false, error: "Execution timed out.", errorType: "timeout" };
    }
    return { success: false, error: `Failed to execute code: ${error.message}`, errorType: "network" };
  }
}