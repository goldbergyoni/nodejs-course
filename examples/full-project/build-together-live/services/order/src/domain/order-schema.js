//💡 Cool json-schema benefits:
//1️⃣ Declarative language for validation
//2️⃣ Share with many other collaborators (e.g. frontend end, API gateway, POSTMAN)
//3️⃣ Generate docs

module.exports = {
    id: "/Order",
    type: "object",
    properties: {
        customerId: {
            type: "integer",
            minimum: 1
        },
        productId: {
            type: "integer",
            minimum: 1
        },
        price: {
            type: "integer",
            minimum: 1
        },
        status: {
            "type": "string",
            "type": "string",
            "enum": ["open", "paid", "delivered"]
        },
        remarks: {
            type: "string"
        }
    },

    required: ["status", "customerId", "productId", "price"]

}