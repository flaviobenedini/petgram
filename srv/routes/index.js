var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', controller.index);
router.get('/termos-de-uso', controller.termos);

module.exports = router;
