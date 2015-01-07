(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:reviews
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <reviews></reviews>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('reviews', reviews);

  function reviews() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/reviews-directive.tpl.html',
      replace: false,
      controllerAs: 'reviews',
      controller: function () {
        var vm = this;
        vm.name = 'reviews';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
