import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_DB = process.env.MONGO_DB; // this will get the port of our mongo db from .env file
