import { getAuth } from '@clerk/express';
import { User } from "../models/User.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";


export const protectRoute = async (req, res, next) => {
    try {
        const { userId } = getAuth(req);

        if (!userId) {
            throw new ApiErrors(401, "Unauthorized request");
        }

        const user = await User.findOne({ clerkId: userId });

        if (!user) {
            throw new ApiErrors(404, "User not found");
        }

        req.user = user;

        next();
    } catch (error) {
        next(error);
    }
};
