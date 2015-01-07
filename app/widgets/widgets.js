(function () {
  'use strict';

  /* @ngdoc object
   * @name widgets
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('widgets', [
      'ui.router'
    ]);

  angular
    .module('widgets')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('widgets', {
        url: '/widgets',
        templateUrl: 'widgets/widgets.tpl.html',
        controller: 'WidgetsCtrl as widgets'
      });
  }

})();
