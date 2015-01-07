(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name widgets.directive:content
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="widgets">
       <file name="index.html">
        <content></content>
       </file>
     </example>
   *
   */
  angular
    .module('widgets')
    .directive('content', content);

  function content() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'widgets/content-directive.tpl.html',
      replace: false,
      controllerAs: 'content',
      controller: function () {
        var vm = this;
        vm.name = 'content';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
      }
    };
  }

})();
