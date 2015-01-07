/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ServicesCtrl', function () {
  var ctrl;

  beforeEach(module('services'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ServicesCtrl');
  }));

  it('should have ctrlName as ServicesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ServicesCtrl');
  });

});
