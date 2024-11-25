import express from "express";
import commentRouter from "../comment.js";

const router = express.Router();

router.use("/comments", commentRouter);

export default router;
