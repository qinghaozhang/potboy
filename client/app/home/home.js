angular.module('potApp.home',[])

.controller('HomeController',function($scope, Restaurants, Auth){
  var initializeLinks = function () {
    Restaurants.getAll()
      .then(function (restaurants) {
        $scope.restaurants = restaurants;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.favor = function(id){
    Auth.addFavor(id);
    alert("Restaurant Added");
  }
  initializeLinks();
})
.directive('starRating', function () {
  return {
    restrict: 'A',
    template:
      '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star">' +
          '&#9733' +
        '</li>' +
      '</ul>',
    scope: {
      ratingValue: '=',
      max: '='
    },
    link: function (scope, elem, attrs) {
      scope.stars = [];
      for (var i = 0; i < scope.max; i++) {
        scope.stars.push({filled: i < scope.ratingValue});
      }
    }
  }
});





//  |||||  note: funtion used before change to ui-router  ||||||
//  vvvvv                              vvvvvv

// $scope.name = name.replace(/\s+/g, '-').toLowerCase()
//______________________________________________________________
// $scope.go = function(id){
//   $scope.id = id
//   var url = $interpolate('/restaurant/{{id}}')($scope)
//   $location.path(url)
// };
