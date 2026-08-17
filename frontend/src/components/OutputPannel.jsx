import React from "react";

export default function OutputPannel({ output, isRunning }) {

  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm flex items-center justify-between">
        <span>Output</span>
        {output?.success && (output?.memory || output?.cpuTime) && (
          <span className="text-xs font-normal text-base-content/60 flex gap-3">
            {output?.cpuTime && <span>⏱ {output.cpuTime}s</span>}
            {output?.memory && <span>💾 {formatMemory(output.memory)}</span>}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4">
        {isRunning ? (
          <div className="flex items-center gap-2 text-base-content/60 text-sm">
            <span className="loading loading-spinner loading-sm" />
            Running your code...
          </div>
        ) : output === null ? (
          <p className="text-base-content/50 text-sm">
            Click "Run Code" to see the output here...
          </p>
        ) : output?.success ? (
          <div>
            {output?.passed !== null && output?.passed !== undefined && (
              <div
                className={`mb-2 inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                  output.passed
                    ? "bg-success/15 text-success"
                    : "bg-error/15 text-error"
                }`}
              >
                {output.passed ? "✅ All tests passed" : "❌ Tests failed"}
              </div>
            )}
            <pre className="text-sm font-mono text-success whitespace-pre-wrap">
              {output?.output}
            </pre>
          </div>
        ) : (
          <div>
            {output?.output && (
              <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                {output?.output}
              </pre>
            )}
            <pre className="text-sm font-mono text-error whitespace-pre-wrap">
              {output?.error}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// JDoodle returns memory in KB as a string (e.g. "12345"). Convert to a
// friendlier MB display when it's large enough to matter.
function formatMemory(memory) {
  const kb = Number(memory);
  if (Number.isNaN(kb)) return memory;
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
  return `${kb} KB`;
}