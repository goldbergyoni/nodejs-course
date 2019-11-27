const Sequelize = require('sequelize');
const dbConnection = require('db-connection');

function DBModel() {
  this.define = () => {
    const dbAccess = new dbConnection();

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

    //❌ Anti-Pattern: Synchronize the code models with the physical DB
    //😱 might delete columns and data
    //Order.sync();

    return Order;

  }
}

module.exports = new DBModel();