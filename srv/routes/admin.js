var express = require('express');
var router = express.Router();

const controller = require('../controllers/adminController')

router.get('/', controller.index);

router.get('/postagens', controller.postagens);
router.get('/postagens/:id', controller.postagemShow);
router.put('/postagens/:id', controller.postagemEdit);
router.delete('/postagens/:id', controller.postagemDelete);

router.get('/usuarios', controller.usuarios);
router.get('/usuarios/:id', controller.usuarioShow);
router.put('/usuarios/:id', controller.usuarioEdit);
router.delete('/usuarios/:id', controller.usuarioDelete);

router.get('/comentarios', controller.comentarios);
router.get('/comentarios/:id', controller.comentarioShow);
router.put('/comentarios/:id', controller.comentarioEdit);
router.delete('/comentarios/:id', controller.comentarioDelete);

module.exports = router;
