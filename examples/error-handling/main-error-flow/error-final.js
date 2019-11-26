class CustomError extends Error {
  constructor(name = "generic", httpCode = 500, message = 'Uknown error has occured', isOperational = false, innerException = null, ...params) {
    super(...params);
    Error.captureStackTrace(this, CustomError);
    this.name = name;
    this.date = new Date();
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.message = message;
    this.innerException = innerException;
  }
}



module.exports = CustomError;