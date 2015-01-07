/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('multibox', function () {
  var scope
    , element;

  beforeEach(module('layout', 'layout/multibox-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<multibox></multibox>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().multibox.name).toEqual('multibox');
  });

});
