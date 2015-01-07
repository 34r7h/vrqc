/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('VrqcDirectivesCtrl', function () {
  var ctrl;

  beforeEach(module('vrqcDirectives'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VrqcDirectivesCtrl');
  }));

  it('should have ctrlName as VrqcDirectivesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VrqcDirectivesCtrl');
  });

});
