(function(){
  'use strict';
  angular
      .module('app')
      .directive('footerDirective', footerDirective);

  function footerDirective() {
    console.log('footerDirective loaded');
      var directive = {
          link: link,
          templateUrl: 'footerView.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        console.log('function link loaded');
      }
  }
})();
