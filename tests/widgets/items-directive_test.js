/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('items', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/items-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<items></items>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().items.name).toEqual('items');
  });

});
