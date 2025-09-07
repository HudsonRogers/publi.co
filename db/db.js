const Sequelize = require("sequelize");

const sequelize = new Sequelize("publi_co", "root", "159753", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
