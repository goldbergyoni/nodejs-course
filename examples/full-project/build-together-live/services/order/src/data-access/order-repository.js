const dbModel = require('./db-model')

function OrderRepository() {
    this.getOrder = async (id) => {

    };

    this.addOrder = async (newOrder) => {
        const orderDBModel = dbModel.define();
        var orderDB = this.domainToDB(newOrder);
        await orderDBModel.create(orderDB, {});
    };

    this.domainToDB = async (order) => {
        const orderDBRecord = Object.assign({}, order);
        orderDBRecord.createdDate = new Date();

        return orderDBRecord;
    }
};

module.exports = OrderRepository;