/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('menu', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/menu-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<menu></menu>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().menu.name).toEqual('menu');
  });

});
