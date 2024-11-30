import express from "express";
import {
  createPost,
  getTweetById,createTweet} from "../controllers/tweetController.js";
import { tweetValidators } from "../validators/tweetValidators.js";

const router = express.Router();

router.get("/", createTweet);

router.get("/:id", getTweetById);

router.post("/", tweetValidators, createPost);

export default router;
