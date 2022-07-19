const controller = {}
var sequelize = require("../model/database");
var Pedidos = require('../model/pedidos');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Pedidos.findAll()
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
    const {nome, email, telefone, comentario, idpacote, data_pedido
    } = req.body;
    // create
    const data = await Pedidos.create({
    data_pedido: data_pedido,
    nome: nome,
    email: email,
    telefone: telefone,
    comentario: comentario,
    idpacote: idpacote

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
    message:"Pedido Adicionado",
    data: data
    });
}

controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await Pedidos.findAll({
    where: { idpedido: id },
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