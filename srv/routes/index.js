var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/feed.html')));

module.exports = router;
