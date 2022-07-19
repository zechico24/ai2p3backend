const express = require('express');
const router = express.Router();
//importer os controladores [2]
const ticketsController = require('../controllers/ticketsController')
const pacotesController = require('../controllers/pacotesController')


router.get('/list',ticketsController.list);
router.get('/get/:id',ticketsController.get);
router.post('/create',ticketsController.create);
router.post('/update/:id', ticketsController.update);
router.get('/listatualizado',ticketsController.listatualizado);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
