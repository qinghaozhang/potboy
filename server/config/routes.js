var userController = require('../users/userController.js');
var restaurantController = require('../restaurants/restaurantController.js');
var helpers = require('./helpers.js');


module.exports = function(app,express){

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/user', userController.getUser);

  app.get('/api/restaurants/', restaurantController.allRestaurants);
  app.get('/api/restaurant/:id', restaurantController.oneRestaurant);
  app.get('/api/restaurants/:area', restaurantController.searchRestaurant);
  app.post('/api/restaurants', userController.addFavor);


  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
}
