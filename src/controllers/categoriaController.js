const controller = {}
var sequelize = require("../model/database");
var Pacotes = require('../model/pacotes');
var Categoria = require('../model/categoria');
var infoPacote = require('../model/infoPacote');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Categoria.findAll()
    .then(function(data){
    return data;
    })
    .catch(error => {
    return error;
    });
    res.json({success : true, data : data});
}

controller.create = async (req,res) => {
    // data
    const {nome, idpacote
    } = req.body;
    // create
    const data = await Categoria.create({
    nome: nome,
    idpacote: idpacote,
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    console.log("Erro: "+error)
    return error;
    })
    // return res
    res.status(200).json({
    success: true,
    message:"Categoria Adicionado",
    data: data
    });
}

controller.listwithcategory = async (req, res) => {
    const { id } = req.params;
    const data = await Categoria.findAll({where:{idpacote:id}})
    .then(function(data){
    return data;
    })
    .catch(error => {
    return error;
    });
    res.json({success : true, data : data});
}




module.exports = controller;