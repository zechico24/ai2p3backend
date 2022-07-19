var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pacotes = require("./pacotes");
var Orcamentos = require("./orcamentos");
var Vendas = sequelize.define(
  "vendas",
  {
    idvenda: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valor_final: Sequelize.FLOAT,
    metodo_pagamento: Sequelize.STRING,
    data_compra: Sequelize.STRING,
    idorcamento: {
        type: Sequelize.INTEGER,
        references: {
          model: Orcamentos,
          key: "idorcamento",
        },
      },
  },
  {
    timestamps: false,
  }
);
module.exports = Vendas;