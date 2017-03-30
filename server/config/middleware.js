var morgan = require('morgan');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var userController = require('../users/userController.js');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  app.use(express.static(__dirname + '/../../node_modules'));
  app.use(expressJWT({secret: userController.jwtSecret}).unless({path: ['/api/users/signup','/api/users/signin']}));
};
