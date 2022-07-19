var Sequelize = require("sequelize");
var sequelize = require("./database");
var Tickets = sequelize.define(
  "tickets",
  {
    idticket: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    telemovel: Sequelize.STRING,
    mensagem: Sequelize.STRING,
    respondido: Sequelize.BOOLEAN
  },
  {
    timestamps: false,
  }
);
module.exports = Tickets;
