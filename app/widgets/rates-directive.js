(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:rates
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <rates></rates>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('rates', rates);

  function rates() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/rates-directive.tpl.html',
      replace: false,
      controllerAs: 'rates',
      controller: function () {
        var vm = this;
        vm.name = 'rates';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
