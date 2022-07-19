const express = require('express');
const router = express.Router();
//importer os controladores [2]
const infoPacoteController = require('../controllers/infoPacoteController')

router.get('/get/:id', infoPacoteController.get);
router.get('/list',infoPacoteController.list);
router.get('/listwithinfopacotes/:id',infoPacoteController.listwithinfopacotes);
router.post('/create',infoPacoteController.create);
router.post('/update/:id',infoPacoteController.update);

// exemplo 
// router.get('/test',employeeController.test);
module.exports = router;
