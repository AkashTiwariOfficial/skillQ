import { ENV } from "../libs/env.js";

const JDOODLE_API = "https://api.jdoodle.com/v1/execute";

const LANGUAGE_VERSIONS = {
  javascript: { language: "nodejs", versionIndex: "4" },
  python: { language: "python3", versionIndex: "4" },
  java: { language: "java", versionIndex: "4" },
  cpp: { language: "cpp17", versionIndex: "1" },
  c: { language: "c", versionIndex: "5" },
};

function looksLikeCompileOrRuntimeError(output) {
  if (!output) return false;
  const errorPatterns = [
    /error:/i,
    /exception in thread/i,
    /traceback \(most recent call last\)/i,
    /segmentation fault/i,
    /compilation failed/i,
    /syntax ?error/i,
    /\bfatal\b/i,
  ];
  return errorPatterns.some((pattern) => pattern.test(output));
}

function guessErrorType(output) {
  if (/error:|compilation failed|syntax ?error/i.test(output)) return "compile";
  return "runtime";
}

export const executeCode = async (req, res) => {
  const { language, code, stdin = "" } = req.body;

  const languageConfig = LANGUAGE_VERSIONS[language];
  if (!languageConfig) {
    return res.status(400).json({
      success: false,
      error: `Unsupported language: ${language}`,
      errorType: "validation",
    });
  }

  if (typeof code !== "string" || code.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: "No code provided to execute.",
      errorType: "validation",
    });
  }

  if (!ENV.JDOODLE_CLIENT_ID || !ENV.JDOODLE_CLIENT_SECRET) {
    return res.status(500).json({
      success: false,
      error: "Server is missing JDoodle credentials.",
      errorType: "config",
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const jdoodleResponse = await fetch(JDOODLE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: ENV.JDOODLE_CLIENT_ID,
        clientSecret: ENV.JDOODLE_CLIENT_SECRET,
        script: code,
        language: languageConfig.language,
        versionIndex: languageConfig.versionIndex,
        stdin,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!jdoodleResponse.ok) {
      return res.status(502).json({
        success: false,
        error: `JDoodle request failed: ${jdoodleResponse.status}`,
        errorType: "network",
      });
    }

    const data = await jdoodleResponse.json();
    const output = data.output ?? "";

    if (data.error) {
      return res.json({ success: false, error: data.error, errorType: "config" });
    }

    if (data.statusCode !== 200) {
      return res.json({
        success: false,
        output,
        error: output || `JDoodle returned status ${data.statusCode}`,
        errorType: "runtime",
      });
    }

    if (looksLikeCompileOrRuntimeError(output)) {
      return res.json({
        success: false,
        output,
        error: output,
        errorType: guessErrorType(output),
      });
    }

    return res.json({
      success: true,
      output: output || "No output",
      memory: data.memory,
      cpuTime: data.cpuTime,
    });
  } catch (error) {
    const errorType = error.name === "AbortError" ? "timeout" : "network";
    return res.status(500).json({
      success: false,
      error: error.name === "AbortError" ? "Execution timed out." : error.message,
      errorType,
    });
  }
};