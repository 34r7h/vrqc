/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , VrqcPagePo = require('./vrqc.po');

describe('Vrqc page', function () {
  var vrqcPage;

  beforeEach(function () {
    vrqcPage = new VrqcPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/vrqc');
  });

  it('should say VrqcCtrl', function () {
    expect(vrqcPage.heading.getText()).toEqual('vrqc');
    expect(vrqcPage.text.getText()).toEqual('VrqcCtrl');
  });
});
