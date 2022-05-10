var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController')

router.get('/', (req, res) => res.sendFile('/Users/flaviobenedini/html/digitalHouse/petgram/srv/views/feed.html'));

module.exports = router;
