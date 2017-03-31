angular.module('potApp.user',[])

.controller('userController', function ($scope, $q, Auth, Restaurants) {
  $scope.getProfile = function(){
    Auth.getUser()
      .then(function(user){
        $scope.username = user.username
      })
  }
  $scope.getFavor = function(){
    //call functions getAll() and getUser() in service
    $q.all([Restaurants.getAll(), Auth.getUser()]).then(function(results) {
      $scope.restaurants = []
      $scope.favorList = results[1].favor
      //find restaurants in current users' favor list
      for(i=0; i<results[0].length; i++){
        if($scope.favorList.includes(results[0][i].id)){
          $scope.restaurants.push(results[0][i])
        }
      }
    })
  }
})
