const dbModel = require('./db-model')

//✅ Best Practice: Separate the DB from the domain
//using the repository pattern
function OrderRepository() {

    this.orderDBModel = dbModel.define();

    this.getOrders = async (id) => {
        return await this.orderDBModel.findAll();
    };

    this.addOrder = async (newOrder) => {
        var orderDB = this.domainToDB(newOrder);
        await this.orderDBModel.create(orderDB, {});
    };

    this.domainToDB = async (order) => {
        const orderDBRecord = Object.assign({}, order);
        orderDBRecord.created_date = new Date();

        return orderDBRecord;
    }
};

module.exports = OrderRepository;