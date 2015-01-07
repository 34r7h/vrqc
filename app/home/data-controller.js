(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:DataCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('DataCtrl', DataCtrl);

  function DataCtrl(Data) {
    var vm = this;
    vm.ctrlName = 'DataCtrl';
    vm.myData = Data;
  }

})();
