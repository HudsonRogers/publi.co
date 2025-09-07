const Sequelize = require("sequelize");

const connection = new Sequelize("publi_co", "root", "123456", {
//const connection = new Sequelize("publi_co", "root", "159753", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;
