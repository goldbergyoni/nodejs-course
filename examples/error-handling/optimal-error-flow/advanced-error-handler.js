const util = require("util");
const logger = require("logger");
const operationalErrorDecider = require("./operationalErrorDecider");

module.exports = new errorHandler();

function errorHandler() {
  this.registerAndHandleAllErrors = function(app) {
    logger.debug("Error handler now registers to handle all errors");
    app.use((err, req, res, next) => {
      
      this.logAndNotifyAboutError(err);
      res.status(err.httpCode ? err.httpCode : 500).json(this.getFriendlyResponse(err));
      // since this error comes from an http request, we keep the process alive by taking a risky call that the error is probably operational
      next();
    });

    process.on("uncaughtException", error => {
      this.logAndNotifyAboutError(error);
      this.crashIfNotOperational(error);
    });

    process.on("unhandledRejection", (reason, p) => {
      this.logAndNotifyAboutError(reason);
      this.crashIfNotOperational(reason);
    });
  };

  this.crashIfNotOperational = function(error) {
    if (!operationalErrorDecider.isOperationalError(error)) {
      logger.info("Error handler concluded that this error is not trusted thus exiting");
        process.exit(1);// should we?
    }
  };

  this.logAndNotifyAboutError = function(error) {
      logger.error(`Error handler is reporting a new error:`);
      logger.error(error);
    }
  };

  this.getFriendlyResponse = function(error) {
    return { name: error.name, message: error.message }; // ||error.message if comes as status code
  };
}
