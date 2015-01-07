(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:booking
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <booking></booking>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('booking', booking);

  function booking() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/booking-directive.tpl.html',
      replace: false,
      controllerAs: 'booking',
      controller: function () {
        var vm = this;
        vm.name = 'booking';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
