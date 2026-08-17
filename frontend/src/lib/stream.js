import { StreamVideoClient } from "@stream-io/video-react-sdk";

const apiKey = import.meta.env.VITE_STREAM_URL;
let client = null;


export const initalizeStreamClient = async (user, token) => {

    if (client && client?.user?.id === user?.id) return client;

    if (client) {
        await disconnectStreamClient();
    }

    if (!apiKey)
        throw new Error("Stream Api key is not provided.");

     client = new StreamVideoClient({
        apiKey,
        user,
        token
    })

    return client;
};


export const disConnectStreamClient = async () => {
    if (client) {
        try {
            await client.disconnectUser();
            client = null;
        } catch (error) {
            console.error("Error disconnecting Stream Client:", error);
        }
    }
};