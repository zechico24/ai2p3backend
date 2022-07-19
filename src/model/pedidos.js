var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pacotes = require("./pacotes");
var Pedidos = sequelize.define(
  "pedidos",
  {
    idpedido: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_pedido: Sequelize.STRING,
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    telefone: Sequelize.STRING,
    comentario: Sequelize.STRING,
    idpacote: {
      type: Sequelize.INTEGER,
      references: {
        model: Pacotes,
        key: "idpacote",
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Pedidos;
