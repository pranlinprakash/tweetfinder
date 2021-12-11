var express = require('express');
var router = express.Router();
var tweetController = require('../controllers/tweet.controller');

/* GET home page. */
router.get('/', tweetController.getTweets);

module.exports = router;
