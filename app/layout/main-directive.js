(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:main
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="layout">
       <file name="index.html">
        <main></main>
       </file>
     </example>
   *
   */
  angular
    .module('layout')
    .directive('main', main);

  function main() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/main-directive.tpl.html',
      replace: false,
      controllerAs: 'main',
      controller: function () {
        var vm = this;
        vm.name = 'main';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
