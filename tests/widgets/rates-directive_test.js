/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('rates', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/rates-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<rates></rates>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().rates.name).toEqual('rates');
  });

});
