import mongoose from "mongoose";
import { MONGO_DB } from "./serverConfig.js";

export default async function connectDB(){

try{

await mongoose.connect(MONGO_DB)
console.log("connect to MongoDB");



} catch(error){

    console.log("Failed to connect to MongoDB");
    console.log(error);
    
}

}