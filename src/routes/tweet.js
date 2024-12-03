import express from "express";
import {
  createPost,
  getTweetById,createTweet} from "../controllers/tweetController.js";
import { tweetValidators } from "../validators/tweetValidators.js";
import { s3Uploader } from "../config/multerConfig.js";

const router = express.Router();

router.get("/", createTweet);

router.get("/:id", getTweetById);

router.post("/", s3Uploader.single('tweetImage'), createPost);

export default router;
