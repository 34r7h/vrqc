(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ]);

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl as home'
      })
      .state('models', {
        url: '/models',
        templateUrl: 'home/models.tpl.html',
        controller: 'ModelsCtrl as models'
      })
      .state('api', {
        url: '/api',
        templateUrl: 'home/api.tpl.html',
        controller: 'ApiCtrl as api'
      })
      .state('data', {
        url: '/data',
        templateUrl: 'home/data.tpl.html',
        controller: 'DataCtrl as data'
      });
  }

})();
