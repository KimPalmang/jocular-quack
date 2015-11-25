(function(){
  'use strict';
  angular
      .module('app')
      .directive('headerDirective', headerDirective);

  function headerDirective() {
    console.log('headerDirective loaded');
      var directive = {
          link: link,
          templateUrl: 'headerView.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        console.log('function link loaded');
      }
  }
})();
