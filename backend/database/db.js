const Sequelize = require("sequelize");

<<<<<<< HEAD
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
=======
//const connection = new Sequelize("publi_co", "root", "123456", {
const connection = new Sequelize("publi_co", "root", "159753", {
>>>>>>> ca3d3db4fa98fc156c862a937af68a18606e229d
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;
