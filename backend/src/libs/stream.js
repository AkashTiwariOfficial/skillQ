import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_SECRET_KEY;

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upserStreamtUser = async (userData) => {
  const upsertNewUser = await chatClient.upsertUser(userData);
  console.log("Stream user upserted successfully", userData);

  if (!upsertNewUser) {
    console.log("user was not upserted!");
  }
};

export const deleteStreamtUser = async (userId) => {
  const deleteStreamUser = await chatClient.deleteUser(userId);
  console.log("Stream user was deleted successfully", deleteStreamUser);

  if (!deleteStreamUser) {
    console.log("user was not deleted!");
  }
};
