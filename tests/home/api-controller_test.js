/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ApiCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ApiCtrl');
  }));

  it('should have ctrlName as ApiCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ApiCtrl');
  });

});
