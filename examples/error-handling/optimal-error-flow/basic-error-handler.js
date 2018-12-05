module.exports.handleErrors = app => {
  app.use((err, req, res, next) => {
    console.error("Error middleware was invoked");
    console.error(err);
    res.status(err.httpCode).json(err.name);
  });

  process.on("uncaughtexception", (error) => {
    //do something thoughtful here
  })

  process.on("unhandledRejection", (reason, p) => {
    console.log(`Uncaught promise is now handled error`);
  });
};