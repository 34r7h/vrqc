/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('booking', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/booking-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<booking></booking>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().booking.name).toEqual('booking');
  });

});
