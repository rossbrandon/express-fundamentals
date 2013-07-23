var express = require('express'),
    util = require('util');
var app = express();

var globalInterceptor = function(req, res, next) {
    console.log(util.format('Path requested is %s', req.path));
    next();
};
var singleInterceptor = function(req, res, next) {
    console.log('Single interceptor called');
    next();
};

app.use(globalInterceptor);

app.get('/', function(req, res) {
    res.send('Default is called');
});
app.get('/other', singleInterceptor, function(req, res) {
    res.send('Other is called');
});

app.listen(3000);