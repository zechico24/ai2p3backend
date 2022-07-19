const express = require('express');
const app = express();
//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    }); 

//Rotas
const pacotesRouters = require('./routes/pacotesRoute.js');
const infoPacoteRouters = require('./routes/infoPacoteRoute.js');
const categoriaRouters = require('./routes/categoriaRoute.js');
const ticketsRouters = require('./routes/ticketsRoute.js');
const pedidosRouters = require('./routes/pedidosRoute.js');
const infoPedidoRouters = require('./routes/infoPedidoRoute.js');
const contasRouters = require('./routes/contasRoute.js');
const orcamentosRouters = require('./routes/orcamentosRoute.js');
const vendasRouters = require('./routes/vendasRoute.js');
//Uses
app.use('/tickets',ticketsRouters)
app.use('/pedidos',pedidosRouters)
app.use('/infoPedido',pedidosRouters)
app.use('/pacotes',pacotesRouters)
app.use('/infoPacote',infoPacoteRouters)
app.use('/categoria',categoriaRouters)
app.use('/contas',contasRouters)
app.use('/orcamentos',orcamentosRouters)
app.use('/vendas',vendasRouters)


//app.use('/',(req,res)=>{
//res.send("Ola");
//});
app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})
