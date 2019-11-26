// 👿 Few words from your product manager:
// The travelling recommender app works great for our customers
// However we face many stability and maintenance issues
// Make it a robust application!

// 🧚‍ Few words from your architect:
//1. Use the travelling recommender code, see 'travelling-recommender-service.js
//2. Wrap it with Get route
//3. Partition the code into layers (folders), maybe organize it better
//4. Create your custom Error object, handle errors properly
//5. Ensure that given insufficient input - 400 error is returned
//6. Ensure that when unknown error is thrown, the error is handled 
//and the process stays alive (see see 'travelling-recommender-service.js constructor)
//7. Log all requests using a middleware

// 💰 Bonus: 
//1. Prevent DDOS by using a rate limiter middleware:
//https://www.npmjs.com/package/express-rate-limit
//2. Allow invoking the code using terminal 'node recommend.js Bangkok 01/01/2020'
//Use process.argv to read the arguments

const express = require("express");
const TravellingRecommenderService = require("./travelling-recommender-service");

//setup
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);

const router = express.Router();
app.use(router);

//Add routes here