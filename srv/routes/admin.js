var express = require('express');
var router = express.Router();

const controller = require('../controllers/adminController')

router.get('/lista-postagens', controller.postagens);
router.get('/lista-usuarios', controller.usuarios);
router.get('/lista-comentarios', controller.comentarios);

module.exports = router;
