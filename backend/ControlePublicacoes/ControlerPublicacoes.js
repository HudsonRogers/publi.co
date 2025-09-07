const Sequelize = require("sequelize");
const connection = require("../db/db");

const Publicacoes = Sequelize.define("Publicacoes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  visualizacoes: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: "publicacoes",
  timestamps: true, // createdAt, updatedAt
  createdAt: "data_criacao",
  updatedAt: false
});

module.exports = Publicacoes;
