const express = require('express');
const router = express.Router();
//importer os controladores [2]
const vendasController = require('../controllers/vendasController')



router.get('/list',vendasController.list);
router.get('/get/:id',vendasController.get);
router.post('/create',vendasController.create);


// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
