angular.module('potApp.navigator',[])

.controller('navController', function($scope, $window, Restaurants, Auth){
  $scope.inputData = {};
  $scope.username = $window.localStorage['storageName']
  $scope.signout = function() {
    Auth.signout();
  }
  $scope.myFunction = function() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i=0;
      for (; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
})
