import express from "express";

import morgan from "morgan";

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

app.use(morgan());

app.use(express.json())
app.use(express.urlencoded())

app.get("/users/:userID/order/:orderID", [mid1, mid2], (req, res) => {
  console.log(req.body);

  console.log(req.params); //this is used to get the url param

  return res.json({
    message: "pong",
  });
});

app.post("/hello", (req, res) => {
  console.log(req.query); //this is used to get the data from query param
  return res.json({
    message: "world",
  });
});

//define a PORT and attach to the express
app.listen(3000, () => {
  console.log("server running on port 3000");
});
