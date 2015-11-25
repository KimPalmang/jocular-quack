(function(){
  'use strict';
  angular
      .module('app')
      .directive('navigationDirective', navigationDirective);

  function navigationDirective() {
    console.log('navigationDirective loaded');
      var directive = {
          link: link,
          templateUrl: 'navigationView.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        console.log('function link loaded');
      }
  }
})();
