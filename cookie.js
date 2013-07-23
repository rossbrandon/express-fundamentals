var express = require('express');
var app = express();

app.use(express.cookieParser('This is my passphrase'));

app.get('/', function(req, res) {
    if (req.cookies.beenHereBefore === 'yes') {
        res.send('You have been here before');
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This your first time here');
    }
});

app.get('/clear', function(req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});

app.listen(3000);