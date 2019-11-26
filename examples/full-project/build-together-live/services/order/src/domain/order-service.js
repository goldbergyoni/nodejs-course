const util = require('util');
const OrderRepository = require('../data-access/order-repository');

//📗 Additional info: 
//This can be all we need to code a small Microservice
//or a facade to other services
//or an orchestrator of other services


module.exports = {
    addOrder: async (orderToAdd) => {
        console.log(orderToAdd);
        const validationResult = orderToAdd.validate();
        if (!validationResult.succeeded) {
            throw new Error(`Validation failed ${util.inspect(validationResult.errors)}`);
        };

        return await new OrderRepository().addOrder(orderToAdd);
    },

    getOrders: async () => {
        return await new OrderRepository().getOrders();
    }
}