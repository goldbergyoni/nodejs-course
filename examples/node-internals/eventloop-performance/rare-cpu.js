const express = require("express");
const util = require("util");
const bigArray = require("./workloads/big-array");
const typicalIO = require("./workloads/typical-io");


console.log("starting the rare CPU");
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);
app.post("/", async (req, res) => {
  console.log("New request");

  const randomNumber = Math.ceil(Math.random() * 40);
  if (randomNumber === 20) {
    console.log("CPU now");
    //encryptedContent = //await scriptPromisified(JSON.stringify(content) , "saltysalty" , 64);
    //encryptedContent = crypto.scryptSync(JSON.stringify(content), "saltysalty", 64);
    bigArray();
  }

  await typicalIO();


  res.json().end();
});