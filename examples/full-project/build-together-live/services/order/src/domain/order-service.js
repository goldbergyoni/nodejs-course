const util = require('util');
const {
    getNamespace
} = require('cls-hooked');
const OrderRepository = require('../data-access/order-repository');


//📗 Additional info: 
//This can be all we need to code a small Microservice
//or a facade to other services
//or an orchestrator of other services


module.exports = {
    addOrder: async (orderToAdd) => {
        const session = getNamespace('request');
        session.get('requestId');
        console.log(`Order service is about to add order ${session.get('requestId')}`)
        const validationResult = orderToAdd.validate();
        if (!validationResult.succeeded) {
            throw new Error(`Validation failed ${util.inspect(validationResult.errors)}`);
        };

        const newOrder = await new OrderRepository().addOrder(orderToAdd);
        console.log(`Order service just finiehed adding order ${session.get('requestId')}`)
        return newOrder;
    },

    getOrders: async () => {
        return await new OrderRepository().getOrders();
    }
}