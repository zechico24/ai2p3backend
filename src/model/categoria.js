var Sequelize = require("sequelize");
var sequelize = require("./database");
var Pacotes = require("./pacotes");
var Categoria = sequelize.define(
  "categoria",
  {
    idcategoria: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
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
module.exports = Categoria;
