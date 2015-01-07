(function () {
  'use strict';

  /* @ngdoc object
   * @name services
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('services', [
      'ui.router'
    ]);

  angular
    .module('services')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'services/services.tpl.html',
        controller: 'ServicesCtrl as services'
      });
  }

})();
