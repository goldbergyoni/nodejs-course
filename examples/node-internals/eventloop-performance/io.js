const express = require("express");
const util = require("util");
const uuidv1 = require("uuid/v1");
const typicalIo = require("./workloads/typical-io");



console.log("starting the server");
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);
app.post("/", async (req, res) => {
  console.log("New request");
  await typicalIo()
  
  res.json().end();
});
