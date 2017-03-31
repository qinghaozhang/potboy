angular.module('potApp.services', [])
//get all restaurants
.factory('Restaurants', function($http){
  var getAll = function(){
    return $http({
      method: 'GET',
      url: '/api/restaurants'
    })
    .then(function (resp) {
      return resp.data;
    });
  }
  //get a restaurants by its' id
  var getOne = function(id){
    return $http({
      method: 'GET',
      url: '/api/restaurant/'+id
    })
    .then(function (resp) {
      return resp.data;
    });
  }
  //get restaurants in area
  var searchRestaurants = function(area){
    return $http({
      method: 'GET',
      url: '/api/restaurants/'+ area
    })
    .then(function (resp) {
      return resp.data;
    });
	}

  return {
    getAll: getAll,
    getOne: getOne,
    search: searchRestaurants,
  }
})

.factory('Auth', function ($http, $location, $window, $q) {
  //user sign in
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      $window.localStorage['storageName'] = resp.data.user.username; //store username in window storage
      return resp.data.token;
    });
  };
  //user sign up
  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
  //check Authorization
  var isAuth = function () {
    return !!$window.localStorage.getItem('com.potApp');
  };
  //sign out
  var signout = function () {
    $window.localStorage.removeItem('com.potApp');//remore stored token for window storage
    $window.localStorage.removeItem('storageName'); //remore stored name for window storage
    $location.path('/signin');
  };
  //add restaurant to user's favor list
  var addFavor = function(id){
    return $http({
      method: 'POST',
      url: '/api/restaurants',
      data: {id: id}
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  //get current user information
  var getUser = function() {
    return $http({
      method: 'GET',
      url: '/api/user'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    getUser: getUser,
    addFavor: addFavor
  };
});
