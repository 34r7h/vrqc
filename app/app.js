(function () {
  'use strict';

  /* @ngdoc object
   * @name vrqc
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('vrqc', [
      'ngAria',
      'ui.router',
      'mgcrea.ngStrap',
      'ngPrettyJson',
      'home',
      'layout',
      'widgets',
      'services'
    ]);

  angular
    .module('vrqc')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
