var express = require('express');
var mongoose = require('mongoose');

var app = express();

 // * MONGOLAB_URI=mongodb://example:example@ds053312.mongolab.com:53312/todolist

mongoose.connect(process.env.MONGODB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(process.env.PORT || 3000);
console.log('listening..');

module.exports = app;
