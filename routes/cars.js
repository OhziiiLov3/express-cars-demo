var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars')

/* GET Cras listing. */
// GET- /cars
router.get('/', carsCtrl.index);
router.get('/:id', carsCtrl.show);

module.exports = router;
