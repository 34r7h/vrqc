/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('side', function () {
  var scope
    , element;

  beforeEach(module('layout', 'layout/side-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<side></side>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().side.name).toEqual('side');
  });

});
