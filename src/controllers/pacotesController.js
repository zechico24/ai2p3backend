const controller = {}
var sequelize = require("../model/database");
var Pacotes = require('../model/pacotes');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Pacotes.findAll()
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
    const {nome
    } = req.body;
    // create
    const data = await Pacotes.create({
    nome: nome,
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
    message:"Pacote Adicionado",
    data: data
    });
}

controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await Pacotes.findAll({
    where: { idpacote: id },
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json({ success: true, data: data });
    }




module.exports = controller;