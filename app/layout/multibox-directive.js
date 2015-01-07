(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:multibox
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="layout">
       <file name="index.html">
        <multibox></multibox>
       </file>
     </example>
   *
   */
  angular
    .module('layout')
    .directive('multibox', multibox);

  function multibox() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/multibox-directive.tpl.html',
      replace: false,
      controllerAs: 'multibox',
      controller: function () {
        var vm = this;
        vm.name = 'multibox';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
