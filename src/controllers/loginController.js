export const loginController = (req, res, next) => {
    
  return res.json({
    message: "Successfully logged in ",
    body: req.body,
  });
};
