const controller = {}
var sequelize = require("../model/database");
var Categoria = require('../model/categoria');
var infoPacote = require('../model/infoPacote');
const InfoPacote = require("../model/infoPacote");
sequelize.sync();

controller.list = async (req, res) => {
    const data = await infoPacote.findAll()
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
    const {nomeDetalhe, preco, idcategoria
    } = req.body;
    // create
    const data = await infoPacote.create({
    nomeDetalhe: nomeDetalhe,
    preco: preco,
    idcategoria: idcategoria,

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

controller.listwithinfopacotes = async (req, res) => {
    const { id } = req.params;
    const data = await infoPacote.findAll({where:{idcategoria:id}})
    .then(function(data){
    return data;
    })
    .catch(error => {
    return error;
    });
    res.json({success : true, data : data});
}

controller.get = async (req,res) => {
    const { id } = req.params;
    const data = await infoPacote.findAll({
    where: { idInfopacote: id },
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
        const {nomeDetalhe , preco} = req.body;
        // Update data
        const data = await infoPacote.update({
        nomeDetalhe: nomeDetalhe,
        preco: preco,
        },
        {
        where: { idInfopacote: id}
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