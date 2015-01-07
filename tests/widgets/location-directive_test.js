/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('location', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/location-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<location></location>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().location.name).toEqual('location');
  });

});
