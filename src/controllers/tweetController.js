import { createTweet as createTweetService } from "../services/tweetService.js";

export const tweetController = (req, res) => {
  return res.json({
    message: "tweeted",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "tweeted",
    id: req.params.id,
  });
};

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
      image: req.file?.location
    });

    return res.status(201).json({
      success: true,
      data: response,
      message: "tweet created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

export const createPost = (req, res) => {
  return res.json({
    message: "welcome to tweet post",
    body: req.body,
  });
};
