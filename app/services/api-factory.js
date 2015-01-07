(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name services.factory:Api
   *
   * @description
   *
   */
  angular
    .module('services')
    .factory('Api', Api);

  function Api() {
    var ApiBase = {};

    ApiBase.someValue = 'Api';
    ApiBase.someMethod = function someMethod() {
      return 'Api';
    };
    return ApiBase;
  }

})();
