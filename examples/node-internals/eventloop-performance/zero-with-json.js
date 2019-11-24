const express = require("express");
const app = express();
const jsonResponse = require('./small-json.json');

console.log("starting the server");
const port = process.env.PORT || 8080;
app.listen(port);

app.post("/", async (req, res) => {
  console.log("New request");

  res.json(jsonResponse).end();
});

//autocannon -c 10 -d 30 -m "POST" -b "fsdfsdfs" http://localhost:8080