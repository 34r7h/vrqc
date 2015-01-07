(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:gallery
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <gallery></gallery>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('gallery', gallery);

  function gallery() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/gallery-directive.tpl.html',
      replace: false,
      controllerAs: 'gallery',
      controller: function () {
        var vm = this;
        vm.name = 'gallery';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
