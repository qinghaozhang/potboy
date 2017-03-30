var Q = require('q');
var Restaurant = require('./restaurantModel.js');

var findAllRestaurants = Q.nbind(Restaurant.find, Restaurant);
var findRestaurant = Q.nbind(Restaurant.findOne, Restaurant);

module.exports = {
  allRestaurants: function (req, res, next) {
    findAllRestaurants({})
    .then(function (restaurants) {
      res.json(restaurants);
    })
    .fail(function (error) {
      next(error);
    });
  },

  oneRestaurant: function (req, res, next) {
    findRestaurant({id: req.params.id})
    .then(function (restaurant) {
      res.json(restaurant);
    })
    .fail(function (error) {
      next(error);
    });
  },

  searchRestaurant: function (req, res, next) {
    var area = req.params.area;
    findAllRestaurants({$text: {$search: area}})
    .then(function (restaurants) {
      res.json(restaurants);
    })
    .fail(function (error) {
      next(error);
    });
  }
}
