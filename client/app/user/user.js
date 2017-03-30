angular.module('potApp.user',[])

.controller('userController', function ($scope, $q, Auth, Restaurants) {
  $scope.getProfile = function(){
    Auth.getUser()
      .then(function(user){
        $scope.username = user.username;
      })
  }
  $scope.getFavor = function(){
    $q.all([Restaurants.getAll(), Auth.getUser()]).then(function(results) {
      $scope.restaurants = [];
      $scope.favorList = results[1].favor;
      for(i=0; i<results[0].length; i++){
        if($scope.favorList.includes(results[0][i].id)){
          $scope.restaurants.push(results[0][i]);
        }
      }
    })
  }
})
