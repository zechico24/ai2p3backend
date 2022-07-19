const express = require('express');
const router = express.Router();
//importer os controladores [2]
const contasController = require('../controllers/contasController')



router.get('/list',contasController.list);
router.get('/get/:id',contasController.get);
router.get('/Login',contasController.Login);
router.get('/list',contasController.get);
router.post('/update',contasController.update);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
