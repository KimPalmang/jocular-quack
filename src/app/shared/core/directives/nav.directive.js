(function(){
  'use strict';
  angular
      .module('app')
      .directive('mainNav', mainNav);

  function mainNav() {
    console.log('mainNav loaded');
      var directive = {
          link: link,
          templateUrl: './app/shared/core/views/navView.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        console.log('function nav-link loaded');
      }
  }
})();
