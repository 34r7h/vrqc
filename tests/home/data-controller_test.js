/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('DataCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('DataCtrl');
  }));

  it('should have ctrlName as DataCtrl', function () {
    expect(ctrl.ctrlName).toEqual('DataCtrl');
  });

});
