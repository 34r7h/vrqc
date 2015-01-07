/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('VrqcCtrl', function () {
  var ctrl;

  beforeEach(module('vrqc'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VrqcCtrl');
  }));

  it('should have ctrlName as VrqcCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VrqcCtrl');
  });

});
