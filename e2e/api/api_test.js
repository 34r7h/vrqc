/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , ApiPagePo = require('./api.po');

describe('Api page', function () {
  var apiPage;

  beforeEach(function () {
    apiPage = new ApiPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/api');
  });

  it('should say ApiCtrl', function () {
    expect(apiPage.heading.getText()).toEqual('api');
    expect(apiPage.text.getText()).toEqual('ApiCtrl');
  });
});
