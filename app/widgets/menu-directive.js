(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:menu
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <menu></menu>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('menu', menu);

  function menu() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/menu-directive.tpl.html',
      replace: false,
      controllerAs: 'menu',
      controller: function () {
        var vm = this;
        vm.name = 'menu';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
