const express = require("express");
const app = express();

//setup
const port = process.env.PORT || 8080;
app.listen(port);

//routes
app.get("/api/products", async (req, res, next) => {
    console.log("Get products was invoked");
    res.status(200).json([{name: 'Banana'}, 
    {name: 'Mango'}])
});





