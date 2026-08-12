import express from "express";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";
import { getChatStream } from "../controllers/chat.controllers.js";


const router = express.Router();

router.get("/token", protectRoute, getChatStream);


export default router;