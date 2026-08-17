import express from "express";
import { executeCode } from "../controllers/jdoodle.controllers.js";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";

const router = express.Router();

router.post("/", executeCode);

export default router;