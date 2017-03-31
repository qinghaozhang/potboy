angular.module('potApp.auth', [])

//controller for sign in and sign up
.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.potApp', token); // store in local storage
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $location.path('/signin');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
