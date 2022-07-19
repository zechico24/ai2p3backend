const express = require('express');
const router = express.Router();
//importer os controladores [2]
const ticketsController = require('../controllers/ticketsController')
const pacotesController = require('../controllers/pacotesController')


router.get('/list',pacotesController.list);
router.get('/get/:id',pacotesController.get);
router.post('/create',pacotesController.create);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
