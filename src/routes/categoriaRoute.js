const express = require('express');
const router = express.Router();
//importer os controladores [2]

const categoriaController = require('../controllers/categoriaController')


router.get('/list',categoriaController.list);
router.get('/listwithcategory/:id',categoriaController.listwithcategory);
router.post('/create',categoriaController.create);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
