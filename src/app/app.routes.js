(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/homeView.html',
        controller: 'HomeController',
      })
      .when('/about', {
        templateUrl: 'app/about/aboutView.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode({enabled: true, requireBase: false});
  }
})();
