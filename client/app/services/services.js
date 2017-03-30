angular.module('potApp.services', [])

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

  var getOne = function(id){
    return $http({
      method: 'GET',
      url: '/api/restaurant/'+id
    })
    .then(function (resp) {
      return resp.data;
    });
  }

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
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      $window.localStorage['storageName'] = resp.data.user.username;
      return resp.data.token;
    });
  };

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

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.potApp');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.potApp');
    $window.localStorage.removeItem('storageName');
    $location.path('/signin');
  };

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
