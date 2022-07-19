const controller = {}
var sequelize = require("../model/database");
var Vendas = require('../model/vendas');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Vendas.findAll(
    )
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
    const { valor_final, metodo_pagamento, data_compra, idorcamento
    } = req.body;
    // create
    const data = await Vendas.create({
    valor_final: valor_final,
    metodo_pagamento: metodo_pagamento,
    data_compra: data_compra,
    idorcamento: idorcamento
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
    message:"Fatura gerada",
    data: data
    });
}




controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await Vendas.findAll({
    where: { idvenda: id },
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