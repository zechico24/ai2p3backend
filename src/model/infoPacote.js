var Sequelize = require("sequelize");
var sequelize = require("./database");
var Categoria = require("./categoria");
var InfoPacote = sequelize.define(
  "infoPacote",
  {
    idInfopacote: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeDetalhe: Sequelize.STRING,
    preco: Sequelize.FLOAT,
    idcategoria: {
        type: Sequelize.INTEGER,
        references: {
          model: Categoria,
          key: "idcategoria",
        },
      },
  },
  {
    timestamps: false,
  }
);
module.exports = InfoPacote;
