/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('content', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/content-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<content></content>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().content.name).toEqual('content');
  });

});
