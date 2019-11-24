//💡 An entity usually has 3 responsibilities:
//1️⃣ Single source for the schema
//2️⃣ Validation
//3️⃣ Factoring objects (e.g. using constructor, static method, etc)

"use strict";
const Ajv = require('ajv');
const orderSchema = require('./order-schema');


let orderSchemaValidator;
class Order {
    constructor(id, userId, productId, price, status) {
        this.id = id || "0";
        this.userId = userId || 0;
        this.productId = productId || 0;
        this.price = price || 0;
        this.status = status || "open";

        const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
        orderSchemaValidator = ajv.compile(Order.schema);
    }

    validate() {
        const validationResult = orderSchemaValidator(this);
        return {
            succeeded: validationResult,
            errors: orderSchemaValidator.errors
        }
    }

    static get schema() {
        return orderSchema
    }
}

module.exports = Order;