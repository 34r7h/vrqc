/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Models', function () {
  var factory;

  beforeEach(module('services'));

  beforeEach(inject(function (Models) {
    factory = Models;
  }));

  it('should have someValue be Models', function () {
    expect(factory.someValue).toEqual('Models');
  });

  it('should have someMethod return Models', function () {
    expect(factory.someMethod()).toEqual('Models');
  });

});
