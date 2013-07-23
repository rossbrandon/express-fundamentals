var express = require('express');
var app = express();

app.use(express.basicAuth(function(user, pass) {
    return user === pass;
}));

app.get('/', function(req, res) {
    res.send('Access authorized section');
});

app.listen(3000);