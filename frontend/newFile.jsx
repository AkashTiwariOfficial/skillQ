import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import Navbar from "../components/Navbar.jsx";
import { Group, Panel, Separator } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPannel from "../components/outputPannel.jsx";
import confetti from "canvas-confetti";
import { executeCode } from "../lib/jdoodle.js";

export default function PorblemSolvingPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [curProblemId, setCurProblemId] = useState("two-sum");
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(PROBLEMS[curProblemId].starterCode.python);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[curProblemId];

  // Tracks the in-flight run so a new click on "Run" cancels the previous
  // one instead of letting two runs race and overwrite each other's output.
  const runAbortControllerRef = useRef(null);

  // Cancel any pending run if the user navigates away / component unmounts.
  useEffect(() => {
    return () => runAbortControllerRef.current?.abort();
  }, []);

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurProblemId(id);
      setCode(PROBLEMS[curProblemId].starterCode[language]);
      setOutput(null);
    }
  }, [id, language]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(currentProblem?.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (probId) => {
    navigate(`/problem/${probId}`);
  };

  const triggerCanvasConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestCasePassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual === normalizedExpected;
  };

  const handleRunCode = async () => {
    if (!code || code.trim().length === 0) {
      setOutput({ success: false, error: "Please write some code before running." });
      return;
    }

    // Cancel any run still in flight before starting a new one.
    runAbortControllerRef.current?.abort();
    const abortController = new AbortController();
    runAbortControllerRef.current = abortController;

    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(language, code, "", {
      signal: abortController.signal,
    });

    // If a newer run has already superseded this one, drop this result.
    if (abortController.signal.aborted) return;

    setIsRunning(false);

    if (!result.success) {
      setOutput(result);
      return;
    }

    const expectedOutput = currentProblem?.expectedOutput?.[language];
    const passed = expectedOutput
      ? checkIfTestCasePassed(result.output, expectedOutput)
      : null; // no expected output defined for this problem/language

    setOutput({ ...result, passed });

    if (passed) {
      triggerCanvasConfetti();
    }
  };

  return (
    <div className="w-screen h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1 min-h-0">
        <Group orientation="horizontal">
          {/* LEFT GROUP*/}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              currentProblem={currentProblem}
              onProblemChange={handleProblemChange}
              curProblemId={curProblemId}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <Separator className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* RIGHT GROUP*/}
          <Panel defaultSize={60} minSize={30}>
            <Group orientation="vertical">
              <Panel defaultSize={70} minSize={30}>
                <CodeEditor
                  code={code}
                  isRunning={isRunning}
                  language={language}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <Separator className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              <Panel defaultSize={30} minSize={20}>
                <OutputPannel output={output} isRunning={isRunning} />
              </Panel>
            </Group>
          </Panel>
        </Group>
      </div>
    </div>
  );
}