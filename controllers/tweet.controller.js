var Twit = require('twit')
const io = require('socket.io-client');
const protocol='http://';
var T = new Twit({
    consumer_key:         'o03xpPoMdRgYiimnxQQGmMmaE',
    consumer_secret:      'Y772caIYlrMItga4RP8Nh0cmS7iVZ5kLbVud6Hrn1UmCS6IOtD',
    access_token:         '942601012916797441-WAIgNCi8Xd9HtiYcfajbfKa7vYSG0aQ',
    access_token_secret:  'ofP5qUbNeT1ShyJqUWR1Tb09H5szttIAqZJHtZfxsISyl'
  })

_this=this;
exports.getTweets = (req, res, next) => {
    T.get('account/verify_credentials', { skip_status: true })
    .catch(function (err) {
        res.status(400).json({ status: 400, message: 'caught error'+ err.stack });
        return false
    }).then(function (result) {
        console.log(result);
        fetchTweets('lockdown',req.headers.host);
    })
}

fetchTweets = (keyWord,host) =>{
    var stream = T.stream('statuses/filter', { track: keyWord })
    stream.on('tweets', function (tweet) {
        let socket = io.connect(protocol + host,{secure: secure, rejectUnauthorized : false});
        socket.emit('tweet',{ status: 200, data: tweet });
    })
}
