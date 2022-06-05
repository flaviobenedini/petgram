var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', controller.index);
router.get('/termos-de-uso', controller.termos);

router.get('/login', controller.login);
router.post('/login', controller.loginSucesso);

router.get('/create-account', controller.createAccount);
router.post('/create-account', controller.createAccountSucesso);

router.get('/criar-post',controller.criarPost);
router.post('/criar-post',controller.criarPostSucesso);

router.get('/minhaconta', controller.minhaConta);
router.put('/minhaconta', controller.minhaContaSucesso);



module.exports = router;
