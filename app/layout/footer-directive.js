(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:footer
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="layout">
       <file name="index.html">
        <footer></footer>
       </file>
     </example>
   *
   */
  angular
    .module('layout')
    .directive('footer', footer);

  function footer() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/footer-directive.tpl.html',
      replace: false,
      controllerAs: 'footer',
      controller: function () {
        var vm = this;
        vm.name = 'footer';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
