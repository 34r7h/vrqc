/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('calendar', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/calendar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<calendar></calendar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().calendar.name).toEqual('calendar');
  });

});
