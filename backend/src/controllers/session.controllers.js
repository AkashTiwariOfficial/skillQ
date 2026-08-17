import { chatClient, streamClient } from "../libs/stream.js";
import { Session } from "../models/session.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";




export const createSession = asyncHandler(async (req, res) => {

    const { difficulty, problem } = req.body;

    if (!difficulty || !problem) {
        throw new ApiErrors(400, "difficulty & problem both are required");
    }

    const clerkId = req.user?.clerkId;
    const userId = req.user?._id;

    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(10)}`;
 
    const session = await Session.create({
        problem,
        difficulty,
        host: userId,
        callId
    });

    if (!session) {
        throw new ApiErrors(500, "Internal Server Error while creating sessions");
    }

    await streamClient.video.call("default", callId).getOrCreate({
        data: {
            created_by_id: clerkId,
            custom: { problem, difficulty, sessionId: session?._id.toString() }
        }
    });

    const channel = chatClient.channel("messaging", callId, {
        name: `${problem} Session`,
        created_by_id: clerkId,
        members: [clerkId]
    });

    await channel.create();

    return res.status(200).json(
        new ApiResponse(200, session, "session created successfully")
    )
});


export const getActiveSessions = asyncHandler(async (req, res) => {

    const mySessions = await Session.find({ status: "active" })
        .populate("host", "name profilepic email clerkId")
        .populate("participant", "name profilepic email clerkId")
        .sort({ createdAt: -1 })
        .limit(20);

    return res.status(200)
        .json(
            new ApiResponse(200, mySessions, "All sessions fetched successfully")
        );

});


export const getMyRecentSessions = asyncHandler(async (req, res) => {

    const userId = req.user?._id;

    const myPastSessions = await Session.find({
        status: "completed",
        $or: [{ host: userId }, { participant: userId }]
    })
        .sort({ createdAt: -1 })
        .limit(20);

    return res.status(200)
        .json(
            new ApiResponse(200, myPastSessions, "All past sessions fetched successfully")
        );

});


export const getSessionById = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const session = await Session.findById(id)
        .populate("host", "name profilepic email clerkId")
        .populate("participant", "name profilepic email clerkId");

    if (!session) {
        throw new ApiErrors(404, "Session not found");
    }

    return res.status(200).json(
        new ApiResponse(200, session, "Session fetched successfully")
    );

});


export const joinSession = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const userId = req.user?._id;
    const clerkId = req.user?.clerkId;

    const session = await Session.findById(id);

    if (!session) {
        throw new ApiErrors(404, "Session not found");
    }

    if (session?.status === "completed") {
        throw new ApiErrors(400, "Session already ended");
    }

    if (session?.participant) {
        throw new ApiErrors(409, "Session is full");
    }

    if (session?.host.toString() === userId.toString()) {
        throw new ApiErrors(400, "Host cannot join thier own session")
    }

    session.participant = userId;

    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    return res.status(200).json(
        new ApiResponse(200, session, "Session joined successfully")
    );

});


export const endSession = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const userId = req.user?._id;
    const clerkId = req.user?.clerkId;

    const session = await Session.findById(id);

    if (!session) {
        throw new ApiErrors(404, "Session not found");
    }

    if (session?.host.toString() !== userId.toString()) {
        throw new ApiErrors(403, "Session can be ended by the host");
    }

    if (session?.status === "completed") {
        throw new ApiErrors(403, "Session has already ended");
    }

    const call = streamClient.video.call("default", session?.callId);
    await call.delete({ hard: true });

    const channel = chatClient.channel("messaging", session?.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    return res.status(200)
        .json(
            new ApiResponse(200, session, "Session ended successfully")
        )

});