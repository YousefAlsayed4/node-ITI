module.exports =
  ("/",
  (req, res, next) => {
    console.log("Logging Middleware");
    next();
  });
