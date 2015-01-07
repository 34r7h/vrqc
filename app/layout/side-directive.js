(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:side
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="layout">
       <file name="index.html">
        <side></side>
       </file>
     </example>
   *
   */
  angular
    .module('layout')
    .directive('side', side);

  function side() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/side-directive.tpl.html',
      replace: false,
      controllerAs: 'side',
      controller: function () {
        var vm = this;
        vm.name = 'side';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
