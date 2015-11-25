(function(){
  'use strict';
  angular.module('app')
  .factory('aboutFactory', aboutFactory);

  function aboutFactory(){
    console.log('loaded aboutFactory');
    var someValue = '';
    var service = {
        save: save,
        someValue: someValue,
        validate: validate
    };
    return service;

    function save() {
        console.log('save in factory aboutFactory');
    }

    function validate() {
        console.log('validate in factory aboutFactory');
    }
  }
})();
