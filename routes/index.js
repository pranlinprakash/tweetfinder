var express = require('express');
var router = express.Router();
var tweetController = require('../controllers/tweet.controller');

/* GET home page. */
router.get('/:dt', tweetController.getTweets);

module.exports = router;
