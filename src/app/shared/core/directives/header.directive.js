(function(){
  'use strict';
  angular
      .module('app')
      .directive('pageHeader', pageHeader);

  function pageHeader() {
    console.log('page-header loaded');
      var directive = {
          link: link,
          templateUrl: './app/shared/core/views/headerView.html',
          restrict: 'EA'
      };
      console.log(directive);
      return directive;

      function link(scope, element, attrs) {
        console.log('function link loaded');
      }
  }
})();
