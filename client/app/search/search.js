angular.module('potApp.search',[])

.controller('searchController',function($scope, $stateParams, Restaurants){
  var initializeLinks = function () {
    var area = $stateParams.area
    //sned out 'area' to service
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
