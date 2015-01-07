/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ModelsCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ModelsCtrl');
  }));

  it('should have ctrlName as ModelsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ModelsCtrl');
  });

});
