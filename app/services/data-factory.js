(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name services.factory:Data
   *
   * @description
   *
   */
  angular
    .module('services')
    .factory('Data', Data);

  function Data() {
    var DataBase = {};
    DataBase.locations = [];
    DataBase.customers = [];
    DataBase.someValue = 'Data';
    DataBase.someMethod = function someMethod() {
      return 'Data';
    };
    return DataBase;
  }

})();
