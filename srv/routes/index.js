var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', controller.index);
router.get('/termos-de-uso', controller.termos);
router.get('/login', controller.login);
router.get('/create-account', controller.createAccount);
router.get('/minhaconta', controller.minhaConta);

module.exports = router;
