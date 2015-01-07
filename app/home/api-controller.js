(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:ApiCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('ApiCtrl', ApiCtrl);

  function ApiCtrl(Api) {
    var vm = this;
    vm.ctrlName = 'ApiCtrl';
    vm.myApi = Api;
  }

})();
