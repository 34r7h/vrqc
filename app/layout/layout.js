(function () {
  'use strict';

  /* @ngdoc object
   * @name layout
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('layout', [
      'ui.router'
    ]);

  angular
    .module('layout')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('layout', {
        url: '/layout',
        templateUrl: 'layout/layout.tpl.html',
        controller: 'LayoutCtrl as layout'
      });
  }

})();
