const Sequelize = require('sequelize');
const dbConnection = require('db-connection');

const DBModel = {
  define: async () => {
    const dbAccess = new dbConnection('localhost', 'bestpracticesshop', 'shopuser', 'shop@1');

    const Order = dbAccess.sequelizeDBReference.define("order", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      price: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      }
    });
    Order.sync();

    return Order;

  }
}

module.exports = DBModel;