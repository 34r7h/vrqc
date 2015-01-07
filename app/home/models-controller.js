(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:ModelsCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('ModelsCtrl', ModelsCtrl);

  function ModelsCtrl(Models) {
    var vm = this;
    vm.myModels = Models;
    vm.ctrlName = 'ModelsCtrl';
  }

})();
