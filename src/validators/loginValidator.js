export const loginValidator = (req, res, next) => {


  if (!req.body.username && !req.body.password) {

    return res.status(400).json({
      message: "Please enter your user details",


    });

  }
  next()
};
