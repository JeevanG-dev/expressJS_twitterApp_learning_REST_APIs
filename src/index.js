import express from "express";

import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import api from './routes/api.js'
import connectDB from "./config/dbConfig.js";



//create a new express app/server object
const app = express();

function mid1(req, res, next) {
  //middleware function 1
  console.log("mid1");
  next(); //this will jump into next funtion, middleware or response.
}

function mid2(req, res, next) {
  //middleware funtion 2

  console.log("mid2");

  next();
}

function commonMiddleware(req, res, next) {
  console.log("used commonlly");
  next();
}

app.use(commonMiddleware); //lets say we have 100 functions that has same common middleware then we can use this method

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', api)

// app.use('/tweets',router) //http://localhost:3000/tweets





app.get("/ping", [mid1, mid2], (req, res) => {
  console.log(req.body);

  console.log(req.params); //this is used to get the url param

  return res.json({
    message: "pong",
  });
});



//define a PORT and attach to the express
app.listen(PORT, () => {
  console.log("server running on port", PORT);
  connectDB()
});
