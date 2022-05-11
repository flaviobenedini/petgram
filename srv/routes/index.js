var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', controller.index);
<<<<<<< HEAD
router.get('/termos-de-uso', controller.termos);
router.get('/login', controller.login);

=======
router.get('/minhaconta', controller.minhaConta);
>>>>>>> feature/feature/007-minha-conta-front

module.exports = router;
