(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:location
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <location></location>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('location', location);

  function location() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/location-directive.tpl.html',
      replace: false,
      controllerAs: 'location',
      controller: function () {
        var vm = this;
        vm.name = 'location';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
