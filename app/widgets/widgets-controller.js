(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name widgets.controller:WidgetsCtrl
   *
   * @description
   *
   */
  angular
    .module('widgets')
    .controller('WidgetsCtrl', WidgetsCtrl);

  function WidgetsCtrl() {
    var vm = this;
    vm.ctrlName = 'WidgetsCtrl';
  }

})();
