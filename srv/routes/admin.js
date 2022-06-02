var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/lista-postagens', controller.index);
router.get('/lista-usuarios', controller.termos);
router.get('/lista-comentarios', controller.login);

module.exports = router;
