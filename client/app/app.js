angular.module ('potApp', [
  'potApp.services',
  'potApp.home',
  'potApp.restaurant',
  'potApp.navigator',
  'potApp.search',
  'potApp.auth',
  'potApp.user',
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider, $qProvider, $httpProvider){
  $stateProvider
    .state ('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .state ('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController',
    })
    .state ('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      authenticate: true
    })
    .state ('navigator',{
      templateUrl: 'app/navigator/navigator.html',
      controller: 'navController',
      authenticate: true
    })
    .state ('restaurant', {
      url: '/restaurant/:id',
      templateUrl: 'app/restaurant/restaurant.html',
      controller: 'RestaurantController',
      authenticate: true
    })
    .state ('search', {
      url: '/search/:area',
      templateUrl: 'app/home/home.html',
      controller: 'searchController',
      authenticate: true
    })
    .state ('user', {
      url: '/user',
      templateUrl: 'app/user/user.html',
      controller: 'userController',
      authenticate: true
    })
    .state ('user.profile', {
      url: '/user/profile',
      templateUrl: 'app/user/profile.html',
      controller: 'userController',
      authenticate: true
    })
    .state ('user.favor', {
      url: '/user/favor',
      templateUrl: 'app/user/favor.html',
      controller: 'userController',
      authenticate: true
    })
    $urlRouterProvider.otherwise('/');

    $qProvider.errorOnUnhandledRejections(false);

    $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.potApp');
      if (jwt) {
        object.headers.Authorization = 'Bearer ' + jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

.run(function ($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.authenticate && !Auth.isAuth()) {
      $state.go('signin');
      event.preventDefault();
    }
  });
});
