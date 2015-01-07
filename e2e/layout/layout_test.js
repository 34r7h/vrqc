/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , LayoutPagePo = require('./layout.po');

describe('Layout page', function () {
  var layoutPage;

  beforeEach(function () {
    layoutPage = new LayoutPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/layout');
  });

  it('should say LayoutCtrl', function () {
    expect(layoutPage.heading.getText()).toEqual('layout');
    expect(layoutPage.text.getText()).toEqual('LayoutCtrl');
  });
});
