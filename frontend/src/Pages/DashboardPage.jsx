import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router";
import {
  useActiveSession,
  useCreateSessions,
  useMyRecentSession,
} from "../Hookes/useSession.js";
import toast from "react-hot-toast";
import WelcomeSections from "../components/WelcomeSections.jsx";
import StatsCards from "../components/StatsCards.jsx";
import ActiveSessions from "../components/ActiveSessions.jsx";
import RecentSessions from "../components/RecentSessions.jsx";
import CreateSessionModal from "../components/CreateSessionModal.jsx";
import { sessionApi } from "../api/session.js";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
  const [showCreateModal, setShowCreateeModal] = useState(false);

  const createSessionMutation = useCreateSessions();
  const { data: myActiveSessions, isLoading: isAtiveSessionsLoading } =
    useActiveSession();
  const { data: myRecentSessions, isLoading: isRecentSessionLoading } =
    useMyRecentSession();

  const activeSessions = myActiveSessions?.data || [];
  const recentSessions = myRecentSessions?.data || [];

  const handleCreateSession = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) {
      toast.error("Both feild are required to create Session!");
      return;
    }

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty,
      },
      {
        onSuccess: (data) => {
          setShowCreateeModal(false);
          navigate(`/session/${data?.data?._id}`);
        },
      },
    );
  };

  const isUserInSession = (session) => {

    if(!user?.id)
       return ;

    return session?.host?.clerkId === user?.id || session?.participant?.clerkId === user?.id;
  }

  return (
    <>
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <WelcomeSections onCreateSession={() => setShowCreateeModal(true)} />

        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatsCards activeSessionsCount={activeSessions.length} recentSessionsCount={recentSessions.length}/>
            <ActiveSessions 
            sessions={activeSessions}
            isLoading={isAtiveSessionsLoading}
             isUserInSession={isUserInSession}
            />
          </div>

          <RecentSessions 
          sessions={recentSessions} 
          isLoading={isRecentSessionLoading}
          />
        </div>
      </div>

      <CreateSessionModal
        onCreateSession={handleCreateSession}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        isOpen={showCreateModal}
        onClose={() => setShowCreateeModal(false)}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}
