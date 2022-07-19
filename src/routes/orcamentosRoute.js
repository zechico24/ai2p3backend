const express = require('express');
const router = express.Router();
//importer os controladores [2]
const orcamentosController = require('../controllers/orcamentosController')


router.get('/list',orcamentosController.list);
router.get('/get/:id',orcamentosController.get);
router.post('/create',orcamentosController.create);
router.post('/update/:id',orcamentosController.update);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
