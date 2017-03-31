angular.module('potApp.navigator',[])

.controller('navController', function($scope, $window, Restaurants, Auth){
  $scope.inputData = {}
  $scope.username = $window.localStorage['storageName'];
  //sign out function
  $scope.signout = function () {
    Auth.signout();
  }
  //show dropdown manu if user hover the user button
  $scope.myFunction = function() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
// Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
})
