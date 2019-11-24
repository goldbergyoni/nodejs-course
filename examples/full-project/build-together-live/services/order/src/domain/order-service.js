const util = require('util')
const order = require('./order')

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
        }
    },

    getOrder: () => {
        //❌ Anti-Pattern: no clear definition of schema? 
        //harder to validate, reuse and reason about 😓
        return {
            userId: 1,
            productId: 2,
            price: 100
        };
    }
}