class CustomError extends Error {
  constructor(name = "generic", httpCode = 500, message = 'Default msg', isOperational = false, innerException = null, ...params) {
    super(...params);
    Error.captureStackTrace(this, CustomError);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.message = message;
    this.innerException = innerException;
  }
}

throw new CustomError('invalidInput', 400);




module.exports = CustomError;