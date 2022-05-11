var express = require('express');
var router = express.Router();

const minhaContaController = require('../controllers/minhaContaController')

router.get('/', minhaContaController.minhaConta);

module.exports = router;
