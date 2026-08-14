import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import Navbar from "../components/Navbar.jsx";
import { Group, Panel, Separator } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPannel from "../components/outputPannel.jsx";
import confetti from "canvas-confetti";

export default function PorblemSolvingPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [curProblemId, setCurProblemId] = useState("two-sum");
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(PROBLEMS[curProblemId].starterCode.python);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  

  const currentProblem = PROBLEMS[curProblemId];

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

  const handleProblemChange = (prob) => {
    setCurProblemId(prob);
  };

  const handleRunCode = () => {};

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

  const checkIfTestCasePassed = () => {};

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

              <Panel defaultSize={30} minSize={20} >
                <OutputPannel />
              </Panel>

            </Group>
          </Panel>
        </Group>
      </div>
    </div>
  );
}
