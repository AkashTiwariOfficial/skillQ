import { useEffect, useState } from "react"
import { sessionApi } from "../Api/session.js";
import { disConnectStreamClient, initalizeStreamClient } from "../lib/stream.js";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";


export const useStreamClent = (isHost, isParticipant, session, isSessionLoading) => {

    const [call, setCall] = useState(null);
    const [chatClient, setChatClient] = useState(null);
    const [isIntializeCall, setIsInitalizeCall] = useState(true);
    const [streamClient, setStreamClient] = useState(null);
    const [channel, setChannel] = useState(null);

    useEffect(() => {

        let videoCall = null;
        let chatClientInstance = null;

        const initCall = async () => {

            if (!session || isSessionLoading) return;
            if (!isHost && !isParticipant) return;
            if (!session?.callId) return;

            if (session?.status === "completed") return;

            try {

                const { token, userId, userName, userImage } = await sessionApi.getStreamToken();

                const client = await initalizeStreamClient({
                    id: userId,
                    name: userName,
                    image: userImage
                }, token);

                setStreamClient(client);

                videoCall = client.call("default", session?.callId)
                await videoCall.join({ create: true });
                setCall(videoCall);

                const apiKey = import.meta.env.VITE_STREAM_URL;
                chatClientInstance = StreamChat.getInstance(apiKey);

                await chatClientInstance.connectUser({
                    id: userId,
                    name: userName,
                    image: userImage
                }, token);

                setChatClient(chatClientInstance);

                const chatChannel = chatClientInstance.channel("messaging", session?.callId);
                await chatChannel.watch();
                setChannel(chatChannel);

            } catch (error) {
                toast.error("failed to join video call");
                console.error("failed to init call", error);
            } finally {
                setIsInitalizeCall(false);
            }
        };

        if (session && !isSessionLoading) initCall();

        // clean-up => performace reason
        return () => {
            // iife
            (
                async () => {
                    try {
                        if (videoCall) {
                            try {
                                await videoCall.leave();
                            } catch (error) {
                                if (!error.message?.includes("already been left")) {
                                    console.error("Error leaving call:", error);
                                }
                            }

                            videoCall = null;
                        }

                        if (chatClientInstance) {
                            await chatClientInstance.disconnectUser();
                            chatClientInstance = null;
                        }

                        await disConnectStreamClient();
                    } catch (error) {
                        console.error("clean-up error", error);
                    }
                }
            )();
        }

    }, [isHost, isParticipant, session, isSessionLoading]);


    return {
        streamClient,
        chatClient,
        channel,
        isIntializeCall,
        call
    }
}