const express = require("express");
const app = express();

console.log("starting the server");
const port = process.env.PORT || 8080;
app.listen(port);


app.post("/", async (req, res) => {
  console.log("New request");
  console.log({someproperty:"somevalue"});
  console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore");

  res.json({}).end();
});

//autocannon -c 10 -d 30 -m "POST" -b "fsdfsdfs" http://localhost:8080