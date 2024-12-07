import express from "express";
import {
  createTweet,
  getTweetById,
  getTweets,deleteTweetbyId,
  updateTweet} from "../controllers/tweetController.js";

import { s3Uploader } from "../config/multerConfig.js";
import { tweetByIdValidator } from "../validators/tweetByIdValidator.js";


const router = express.Router();

router.get("/", getTweets);

router.get("/:id", tweetByIdValidator, getTweetById )

router.delete('/:id', tweetByIdValidator, deleteTweetbyId)


router.put("/:id", tweetByIdValidator, updateTweet )

router.post("/", s3Uploader.single('tweetImage'), createTweet);


export default router;
