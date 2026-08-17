import { useUser } from "@clerk/react";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useEndSession,
  useGetSessionById,
  useJoinSession,
} from "../Hookes/useSession.js";
import { PROBLEMS } from "../data/problems.js";
import Navbar from "../components/Navbar.jsx";
import { Group, Panel, Separator } from "react-resizable-panels";
import { sessionApi } from "../Api/session.js";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPannel from "../components/OutputPannel.jsx";
import { getDiffultyBadgeClass } from "../lib/utils.js";
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from "lucide-react";
import { useStreamClent } from "../hookes/useStreamClient.js";
import VideoCallUI from "../components/VideoCallUI.jsx";
import { StreamVideo, StreamCall } from "@stream-io/video-react-sdk";
import confetti from "canvas-confetti";
import { executeCode } from "../lib/jdoodle.js";

export default function SessionPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { id } = useParams();
  const runAbortControllerRef = useRef(null);

  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const {
    data: sessionInfo,
    isLoading: isSessionLoading,
    refetch,
  } = useGetSessionById(id);

  const session = sessionInfo?.data;

  const isHost = session?.host?.clerkId === user?.id || "";
  const isParticipant = session?.participant?.clerkId === user?.id || "";

  const { streamClient, chatClient, channel, isIntializeCall, call } =
    useStreamClent(isHost, isParticipant, session, isSessionLoading);

  const problemData = session?.problem
    ? Object.values(PROBLEMS).find((p) => session.problem === p.title)
    : null;

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(problemData?.starterCode?.language || "");

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(problemData?.starterCode[newLang]);
    setOutput(null);
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
          .replace(/\s*,\s*/g, ","),
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
      setOutput({
        success: false,
        error: "Please write some code before running.",
      });
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

    const expectedOutput = session?.problem?.expectedOutput?.[language];
    const passed = expectedOutput
      ? checkIfTestCasePassed(result.output, expectedOutput)
      : null; // no expected output defined for this problem/language

    setOutput({ ...result, passed });

    if (passed) {
      triggerCanvasConfetti();
    }
  };

  const handleEndSession = () => {
    if (
      confirm(
        "Are you sure you want the end session, All participants will be notified.",
      )
    ) {
      endSessionMutation.mutate(id, {
        onSuccess: () => navigate("/dashboard"),
      });
    }
  };

  useEffect(() => {
    if (!session || isSessionLoading) return;

    if (session?.status === "completed") navigate("/dashboard");
  }, [session, isSessionLoading, navigate]);

  useEffect(() => {
    if (!session || isSessionLoading || !user) return;

    if (isHost || isParticipant) return;

    joinSessionMutation.mutate(id, { onSuccess: refetch });
  }, [isHost, isParticipant, session, isSessionLoading, id, user]);

  useEffect(() => {
    if (problemData?.starterCode?.[language])
      setCode(problemData?.starterCode?.[language]);
  }, [problemData, language]);

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Group orientation="horizontal">
          <Panel defaultSize={50} minSize={30}>
            <Group orientation="vertical">
              <Panel defaultSize={50} minSize={30}>
                <div className="h-full overflow-y-auto bg-base-200">
                  {/* HEADER SECTION */}
                  <div className="p-6 bg-base-100 border-b border-base-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold text-base-content">
                          {session?.problem || "Loading..."}
                        </h1>
                        {problemData?.category && (
                          <p className="text-base-content/60 mt-1">
                            {problemData?.category}
                          </p>
                        )}
                        <p className="text-base-content/60 mt-2">
                          Host: {session?.host?.name || "Loading..."} •{" "}
                          {session?.participant ? 2 : 1}/2 participants
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`badge badge-lg ${getDiffultyBadgeClass(
                            session?.difficulty,
                          )}`}
                        >
                          {session?.difficulty.slice(0, 1).toUpperCase() +
                            session?.difficulty.slice(1) || "Easy"}
                        </span>
                        {isHost && session?.status === "active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error btn-sm gap-2"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                          </button>
                        )}
                        {session?.status === "completed" && (
                          <span className="badge badge-ghost badge-lg">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {problemData?.description && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">
                          Description
                        </h2>
                        <div className="space-y-3 text-base leading-relaxed">
                          <p className="text-base-content/90">
                            {problemData.description.text}
                          </p>
                          {problemData.description.notes?.map((note, idx) => (
                            <p key={idx} className="text-base-content/90">
                              {note}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {problemData?.examples &&
                      problemData?.examples?.length > 0 && (
                        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-base-content">
                            Examples
                          </h2>

                          <div className="space-y-4">
                            {problemData?.examples.map((example, idx) => (
                              <div key={idx}>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="badge badge-sm">
                                    {idx + 1}
                                  </span>
                                  <p className="font-semibold text-base-content">
                                    Example {idx + 1}
                                  </p>
                                </div>
                                <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                  <div className="flex gap-2">
                                    <span className="text-primary font-bold min-w-[70px]">
                                      Input:
                                    </span>
                                    <span>{example?.input}</span>
                                  </div>
                                  <div className="flex gap-2">
                                    <span className="text-secondary font-bold min-w-[70px]">
                                      Output:
                                    </span>
                                    <span>{example?.output}</span>
                                  </div>
                                  {example?.explanation && (
                                    <div className="pt-2 border-t border-base-300 mt-2">
                                      <span className="text-base-content/60 font-sans text-xs">
                                        <span className="font-semibold">
                                          Explanation:
                                        </span>{" "}
                                        {example.explanation}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {problemData?.constraints &&
                      problemData?.constraints?.length > 0 && (
                        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-base-content">
                            Constraints
                          </h2>
                          <ul className="space-y-2 text-base-content/90">
                            {problemData.constraints.map((constraint, idx) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <code className="text-sm">{constraint}</code>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </Panel>

              <Separator className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              <Panel defaultSize={50} minSize={30}>
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

                  <Panel defaultSize={30} minSize={10}>
                    <OutputPannel output={output} isRunning={isRunning} />
                  </Panel>
                </Group>
              </Panel>
            </Group>
          </Panel>

          <Separator className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          <Panel defaultSize={50} minSize={30}>
            <div className="h-full bg-base-200 p-4 overflow-auto">
              {isIntializeCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Connecting to video call...</p>
                  </div>
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <div className="card bg-base-100 shadow-xl max-w-md">
                    <div className="card-body items-center text-center">
                      <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                        <PhoneOffIcon className="w-12 h-12 text-error" />
                      </div>
                      <h2 className="card-title text-2xl">Connection Failed</h2>
                      <p className="text-base-content/70">
                        Unable to connect to the video call
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </Group>
      </div>
    </div>
  );
}
