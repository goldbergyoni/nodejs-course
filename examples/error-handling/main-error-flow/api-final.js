const express = require("express");
const app = express();
const ProductService = require("./service-final");
const {handler} = require('./error-handling-suite');

//setup
const port = process.env.PORT || 8080;
app.listen(port);

const router = express.Router();
app.use(router);

//routes
router.get("/api/products", async (req, res, next) => {
  try {
    console.log("Get products was invoked");
    const result = await new ProductService().getUserProducts({});
    res.status(200).json({})
  } catch (error) {
    next(error);
  }
});


handler.handleErrors(app);