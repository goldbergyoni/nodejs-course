const express = require("express");
const util = require("util");
const uuidv1 = require("uuid/v1");
const faker = require("faker");
const typicalIo = require("./workloads/typical-io");




console.log("starting the server");
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);
app.post("/", async (req, res) => {
  console.log("New request");
  await typicalIo()
  methodWithPlainLogic()
  res.json().end();
});

const methodWithPlainLogic = () => {
  let randomString;
  const randomNumber = Math.random(10);
  for (let index = 0; index < randomNumber; index++) {
    if (randomNumber < 5) {
      randomString += faker.random.word();
    } else {
      randomString += faker.random.uuid();
    }
  }
}
