(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name services.controller:ServicesCtrl
   *
   * @description
   *
   */
  angular
    .module('services')
    .controller('ServicesCtrl', ServicesCtrl);

  function ServicesCtrl() {
    var vm = this;
    vm.ctrlName = 'ServicesCtrl';
  }

})();
