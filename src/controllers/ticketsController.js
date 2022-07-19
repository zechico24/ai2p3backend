const controller = {}
var sequelize = require("../model/database");
var Tickets = require('../model/tickets');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Tickets.findAll({
        where: { respondido: true },
    })
    .then(function(data){
    return data;
    })
    .catch(error => {
    return error;
    });
    res.json({success : true, data : data});
}

controller.listatualizado = async (req, res) => {
    const data = await Tickets.findAll(
        {
            where: { respondido: false },
        }
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
    const { nome, email, telemovel, mensagem
    } = req.body;
    // create
    const data = await Tickets.create({
    nome: nome,
    email: email,
    telemovel: telemovel,
    mensagem: mensagem,
    respondido: true
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
    message:"Ticket Adicionado",
    data: data
    });
}

controller.update = async (req,res) => {
    // parameter get id
    var respondido = req.body;
    const { id } = req.params;
    // parameter POST
    // Update data
    const data = await Tickets.update({
    respondido: true
    },
    {
    where: { idticket: id}
    })
    .then( function(data){
    return data;
    })
    .catch(error => {
    return error;
    })
    res.json({success:true, data:data, message:"Ticket respondido."});
}


controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await Tickets.findAll({
    where: { idticket: id },
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