/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('main', function () {
  var scope
    , element;

  beforeEach(module('layout', 'layout/main-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<main></main>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().main.name).toEqual('main');
  });

});
