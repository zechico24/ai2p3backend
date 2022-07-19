var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pedidos = require("./pedidos");
var Orcamentos = sequelize.define(
  "orcamentos",
  {
    idorcamento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valor: Sequelize.FLOAT,
    info_pagamentos: Sequelize.STRING,
    data_orcamento: Sequelize.STRING,
    desconto: Sequelize.INTEGER,
    idpedido: {
      type: Sequelize.INTEGER,
      references: { 
        model: Pedidos,
        key: "idpedido",
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Orcamentos;
