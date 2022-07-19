const express = require('express');
const router = express.Router();
//importer os controladores [2]
const pedidosController = require('../controllers/pedidosController')


router.get('/list',pedidosController.list);
router.get('/get/:id',pedidosController.get);
router.post('/create',pedidosController.create);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
