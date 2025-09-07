const Sequelize = require("sequelize");
const connection = require("../database/db");

const Publicacoes = connection.define("Publicacoes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  visualizacoes: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Publicacoes;
