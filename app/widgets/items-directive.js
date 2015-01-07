(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:items
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <items></items>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('items', items);

  function items() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/items-directive.tpl.html',
      replace: false,
      controllerAs: 'items',
      controller: function () {
        var vm = this;
        vm.name = 'items';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
