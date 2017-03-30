angular.module('potApp.search',[])

.controller('searchController',function($scope, $stateParams, Restaurants){
  var initializeLinks = function () {
    var area = $stateParams.area
    Restaurants.search(area)
      .then(function (restaurants) {
        $scope.restaurants = restaurants;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  initializeLinks();
})
// $scope.name = name.replace(/\s+/g, '-').toLowerCase()
