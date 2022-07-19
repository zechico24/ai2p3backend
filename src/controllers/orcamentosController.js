const controller = {}
var sequelize = require("../model/database");
var orcamentos = require('../model/orcamentos');
const Orcamentos = require("../model/orcamentos");
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Orcamentos.findAll()
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
    const {valor, desconto, info_pagamentos, data_orcamento, idpedido
    } = req.body;
    // create
    const data = await Orcamentos.create({
    valor: valor,
    desconto: desconto,
    info_pagamentos: info_pagamentos,
    data_orcamento: data_orcamento,
    idpedido: idpedido,

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
    message:"Orcamento criado",
    data: data
    });
}


controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await Orcamentos.findAll({
    where: { idorcamento: id },
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json({ success: true, data: data });
    }

    controller.update = async (req,res) => {
        // parameter get id
        const { id } = req.params;
        // parameter POST
        const {valor , desconto} = req.body;
        // Update data
        const data = await Orcamentos.update({
       valor: valor,
       desconto: desconto,
        },
        {
        where: { idorcamento: id}
        })
        .then( function(data){
        return data;
        })
        .catch(error => {
        return error;
        })
        res.json({success:true, data:data, message:"Alterado com sucesso"});
        }


        module.exports = controller;