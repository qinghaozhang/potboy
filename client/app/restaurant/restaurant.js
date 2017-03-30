angular.module('potApp.restaurant',[])

.controller('RestaurantController', function($scope, $stateParams, Restaurants){
  $scope.restaurants = [];
  var initializeRestaurant = function(id) {
      Restaurants.getOne(id)
        .then(function(restaurant){
          $scope.restaurants.push(restaurant);
        })
  };
  initializeRestaurant($stateParams.id);
})
