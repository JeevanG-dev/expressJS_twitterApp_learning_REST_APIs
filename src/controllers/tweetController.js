import { StatusCodes } from "http-status-codes";
import {
  createTweet as createTweetService,
  getTweets as getTweetService,
  getTweetById as getTweetByIdService,
  deleteTweet as deleteTweetbyIdService,
} from "../services/tweetService.js";

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
      image: req.file?.location,
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

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetService();

    return res.status(200).json({
      success: true,
      data: response,
      message: "tweet fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server issue",
      success: false,
    });
  }
};

export const getTweetById = async (req, res) => {
  try {
    const response = await getTweetByIdService(req.params.id);

    return res.json({
      success: true,
      data: response,
      message: "Tweet found successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Error!!",
    });
  }
};


export const deleteTweetbyId = async (req,res) =>{


  try {
    

  const response = await deleteTweetbyIdService(req.params.id)

  return res.status(StatusCodes.OK).json({

    success:true,
    data:response,
    message:"successfully deleted message"
  })



  } catch (error) {

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message:"Something went wrong",
      success
    })
    
  }

}