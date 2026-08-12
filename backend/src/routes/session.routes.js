import express from "express";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";
import { getChatStream } from "../controllers/chat.controllers.js";
import { createSession, endSession, getActiveSessions, getMyRecentSessions, getSessionById, joinSession } from "../controllers/session.controllers.js";


const router = express.Router();

router.get("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent-sessions", protectRoute, getMyRecentSessions);

router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);


export default router;