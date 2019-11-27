// purpose of this code is to provide a single, per-process, DB reference and connection
// this code will go into some shared NPM library since all microservices depends on this

const Sequelize = require("sequelize");

//this is the hot concurrent reference to the DB, it should be kept private and singleton
let _sequelizeDBReference = null;

class DBAccess {
  constructor() {
    //❌ Anti-Pattern: credentials are stored in code
    _sequelizeDBReference = new Sequelize('shop', 'myuser', 'myuserpassword', this.getSequelizeConfig('localhost'));
  }

  //✅ Best Practice: One connection per process, make it a singleton
  get sequelizeDBReference() {
    return _sequelizeDBReference;
  }

  //allow this soon to get config section from configurable json
  getSequelizeConfig(hostAddress) {
    return {
      host: hostAddress,
      dialect: "postgres",
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    };
  }
}

module.exports = DBAccess;