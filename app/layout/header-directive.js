(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:header
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="layout">
       <file name="index.html">
        <header></header>
       </file>
     </example>
   *
   */
  angular
    .module('layout')
    .directive('header', header);

  function header() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/header-directive.tpl.html',
      replace: false,
      controllerAs: 'header',
      controller: function () {
        var vm = this;
        vm.name = 'header';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
