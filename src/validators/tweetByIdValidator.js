import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

export const tweetByIdValidator = (req, res, next) => {
  const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
        success:false,
      message  : "Invalid Tweet ID",
    });
  }

  next();
};
