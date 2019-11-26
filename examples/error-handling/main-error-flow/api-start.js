const express = require("express");
const app = express();
const ProductService = require("./service-start");

//setup
const port = process.env.PORT || 8080;
app.listen(port);

const router = express.Router();
app.use(router);

//routes
router.get("/api/products", async (req, res, next) => {
  console.log("Get products was invoked");
  const result = await new ProductService().getUserProducts();
  res.status(200).json(result);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.name ? err.name : "Some error"
  });
});