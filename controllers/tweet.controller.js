var Twit = require('twit')
const io = require('socket.io-client');
require('dotenv').config()
const protocol='http://';
const secure=false;
var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_TOKEN_SECRET
  })

_this=this;
exports.getTweets = (req, res, next) => {
    T.get('account/verify_credentials', { skip_status: true })
    .catch(function (err) {
        res.status(400).json({ status: 400, message: 'caught error'+ err.stack });
        return false
    }).then(function (result) {
        res.status(200).json({ status: 200, message: 'data is comingup' });
    })
    if (req.params.dt!=undefined) {
        var stream = T.stream('statuses/filter', { track: req.params.dt })
        stream.on('tweet', function (tweet) {
            let socket = io.connect(protocol + req.headers.host,{secure: secure, rejectUnauthorized : false});
            socket.emit('tweet',{ status: 200, data: tweet });
        })
    }
}
