(function(){
  'use strict';
  angular
      .module('app')
      .directive('pageFooter', pageFooter);

  function pageFooter() {
    console.log('pageFooter loaded');
      var directive = {
          link: link,
          templateUrl: './app/shared/core/views/footerView.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        console.log('function link loaded');
      }
  }
})();
