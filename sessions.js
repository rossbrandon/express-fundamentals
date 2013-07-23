var express = require('express');
var app = express();

/*
 Can't do this on Windows
 var RedisStore = require('connect-redis')(express);
 */

app.use(express.cookieParser());

/*
 Can't do this on Windows
 app.use(express.session({ store: new RedisStore, secret: 'This is my secret'} ));
 */

app.use(express.session({ secret: 'This is my secret' }));

app.get('/', function(req, res) {
    req.session.name = req.session.name || new Date().toUTCString();
    console.log(req.sessionID);
    res.send(req.session.name);
});

app.listen(3000);