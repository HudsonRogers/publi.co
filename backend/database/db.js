const Sequelize = require("sequelize");

//configuração para definir a senha do banco de dados
const os = require('os');
const userInfo = os.userInfo();
let dbPassword;
if (userInfo.username === "wilso") {
  dbPassword = "123456";
} else {
  dbPassword = "159753";
};

const connection = new Sequelize("publi_co", "root", dbPassword, {
//const connection = new Sequelize("publi_co", "root", "159753", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;
