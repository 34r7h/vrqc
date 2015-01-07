/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('WidgetsCtrl', function () {
  var ctrl;

  beforeEach(module('widgets'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('WidgetsCtrl');
  }));

  it('should have ctrlName as WidgetsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('WidgetsCtrl');
  });

});
