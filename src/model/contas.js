var Sequelize = require("sequelize");
var sequelize = require("./database");
var Contas = sequelize.define(
  "contas",
  {
    idconta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    telemovel: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    timestamps: false,
  }
);
module.exports = Contas;
