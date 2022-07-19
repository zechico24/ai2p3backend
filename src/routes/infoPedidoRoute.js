const express = require('express');
const router = express.Router();
//importer os controladores [2]
const infoPedidoController = require('../controllers/infoPedidoController')


router.get('/list',infoPedidoController.list);
router.post('/create',infoPedidoController.create);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
