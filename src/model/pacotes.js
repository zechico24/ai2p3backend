var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pacotes = sequelize.define(
  "pacotes",
  {
    idpacote: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING
  },
  {
    timestamps: false,
  }
);
module.exports = Pacotes;
