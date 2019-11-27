const express = require("express");
const webMiddlewares = require("web-middlewares");
const uuid = require("uuid");
const {
    createNamespace
} = require("cls-hooked");
const Order = require("../domain/order");
const {
    addOrder,
    getOrders
} = require("../domain/order-service");



const app = express();
const router = express.Router()

app.use((req, res, next) => {
    const requestSession = createNamespace('request');
    const requestId = uuid();
    req.requestId = requestId;
    req.session = requestSession;
    next();
});

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
        req.session.run(async () => {
            req.session.set('requestId', req.requestId);

            console.log("Add new orders was invoked", req.body, req.requestId);
            const orderToAdd = Object.assign(new Order(), req.body);
            const orderAddResult = await addOrder(orderToAdd);
            res.json(orderAddResult).end();
        })

    });

    router.get("/api/orders", async (req, res, next) => {
        console.log("Get orders was invoked");
        const orders = await getOrders();
        res.json(orders).end();
    });
}