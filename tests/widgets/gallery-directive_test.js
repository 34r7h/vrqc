/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('gallery', function () {
  var scope
    , element;

  beforeEach(module('widgets', 'widgets/gallery-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<gallery></gallery>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$digest();
    expect(element.isolateScope().gallery.name).toEqual('gallery');
  });

});
