import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_DB = process.env.MONGO_DB; // this will get the port of our mongo db from .env file

export const AWS_REGION = process.env.AWS_REGION

export const AWS_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const AWS_ACCESS_ID = process.env.AWS_SECRET_ACCESS_KEY_ID;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
