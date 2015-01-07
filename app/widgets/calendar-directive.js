(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:calendar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <calendar></calendar>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('calendar', calendar);

  function calendar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/calendar-directive.tpl.html',
      replace: false,
      controllerAs: 'calendar',
      controller: function () {
        var vm = this;
        vm.name = 'calendar';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
