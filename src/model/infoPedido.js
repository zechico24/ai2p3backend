var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pedidos = require("./pedidos");
var InfoPacote = require("./infoPacote");
var InfoPedido = sequelize.define(
  "infoPedido",
  {
    idInfopedido: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valorInfo: Sequelize.FLOAT,
    idpedido: {
        type: Sequelize.INTEGER,
        references: {
          model: Pedidos,
          key: "idpedido",
        },
      },
      idInfopacote: {
        type: Sequelize.INTEGER,
        references: {
          model: InfoPacote,
          key: "idInfopacote",
        },
      },
  },
  {
    timestamps: false,
  }
);
module.exports = InfoPedido;