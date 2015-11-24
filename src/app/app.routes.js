(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/homeView.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .when('/about', {
        templateUrl: 'app/about/aboutView.html',
        controller: 'AboutController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
