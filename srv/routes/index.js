var express = require('express');
var router = express.Router();

const controller = require('../controller/indexController')

/* GET home page. */
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/feed.html')));

module.exports = router;
