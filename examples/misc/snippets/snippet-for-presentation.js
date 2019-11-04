function doSomethingThatThrows() {
  throw "Error as string";
  throw {
    message: "Error as object",
    code: "500"
  };
}