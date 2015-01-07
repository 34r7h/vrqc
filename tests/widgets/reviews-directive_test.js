/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('reviews', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/reviews-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<reviews></reviews>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().reviews.name).toEqual('reviews');
  });

});
