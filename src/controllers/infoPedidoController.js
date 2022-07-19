const controller = {}
var sequelize = require("../model/database");
var infoPedido = require('../model/infoPedido');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await infoPedido.findAll()
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
    const {idpedido, idInfopacote, valorInfo
    } = req.body;
    // create
    const data = await infoPedido.create({
    idpedido: idpedido,
    idInfopacote: idInfopacote,
    valorInfo: valorInfo,
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


module.exports = controller;