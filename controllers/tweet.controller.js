var Twit = require('twit')
var T = new Twit({
    consumer_key:         '0XG5299e6oSESyHvLGIMGmwW3',
    consumer_secret:      'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
    access_token:         '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
    access_token_secret:  'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
  })


exports.getTweets = (req, res, next) => {
    T.get('account/verify_credentials', { skip_status: true })
    .catch(function (err) {
        return res.status(200).json({status: 400, message: err });
    }).then(function (result) {
        console.log('done');
    })
}
