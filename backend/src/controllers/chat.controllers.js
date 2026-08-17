import { chatClient } from "../libs/stream.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const getChatStream = asyncHandler(async (req, res) => {

    const token = chatClient.createToken(req?.user?.clerkId);

    if (!token) {
        throw new ApiErrors(500, "Internal Server Error while generating token for Stream");
    }

    const resp = {
        token,
        userId: req.user.clerkId,
        userName: req.user.name,
        userImage: req.user.profilepic
    }

    return res.status(200).json(
        new ApiResponse(200, resp, "Token created successfully")
    )
})