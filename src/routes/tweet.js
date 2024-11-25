import express from "express";
import {
  createPost,
  getTweetById,
  tweetController,
} from "../controllers/tweetController.js";
import { tweetValidators } from "../validators/tweetValidators.js";

const router = express.Router();

router.get("/", tweetController);

router.get("/:id", getTweetById);

router.post("/", tweetValidators, createPost);

export default router;
