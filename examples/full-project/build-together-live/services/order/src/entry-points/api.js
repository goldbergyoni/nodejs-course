const express = require("express");
const webMiddlewares = require("web-middlewares");
const Order = require("../domain/order");
const {
    addOrder,
    getOrders
} = require("../domain/order-service");


const app = express();
const router = express.Router()

//✅ Best Practice: initialize modules using functions
module.exports = () => {
    //Initialize Express
    const port = process.env.PORT || 8080;
    app.listen(port);

    //middlewares here
    app.use(webMiddlewares());
    app.use(router);

    //routes
    router.post("/api/orders", async (req, res, next) => {
        console.log("Add new orders was invoked", req.body);
        const orderToAdd = Object.assign(new Order(), req.body);
        const orderAddResult = await addOrder(orderToAdd);
        res.json(orderAddResult).end();
    });

    router.get("/api/orders", async (req, res, next) => {
        console.log("Get orders was invoked");
        const orders = await getOrders();
        res.json(orders).end();
    });
}