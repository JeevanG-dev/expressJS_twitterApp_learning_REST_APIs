import express from "express";
import { createPost, getTweetById, tweetController } from "../controllers/tweetController.js";

const router = express.Router();

router.get("/", tweetController);

router.get("/:id", getTweetById);

router.post('/', createPost )

export default router;
