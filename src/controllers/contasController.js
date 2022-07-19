const controller = {}
var sequelize = require("../model/database");
var Contas = require('../model/contas');
sequelize.sync();

controller.list = async (req, res) => {
    const data = await Contas.findAll()
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
    const data = await Contas.findAll({
    where: { idconta: id },
    })
    .then(function(data){
    return data;
    })
    .catch(error =>{
    return error;
    })
    res.json({ success: true, data: data });
    }



    controller.Login = async(req, res) => {
    
        
            const data = await Contas.findAll({
                where:{
                    email: req.body.email},
                    
                
            })
            const match = await compare(req.body.password, Contas[0].password);
            console.log(match)
            if(!match) return res.status(400).json({msg: "Wrong Password"});
        
        
        }

        controller.update = async (req,res) => {
            // parameter get id
            // parameter POST
            const {nome, email, telemovel, password} = req.body;
            // Update data
            const data = await Contas.update({
            nome: nome,
            email: email, 
            telemovel: telemovel,
            password: password,
            },
            {
            where: { idconta: 1}
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