/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , DataPagePo = require('./data.po');

describe('Data page', function () {
  var dataPage;

  beforeEach(function () {
    dataPage = new DataPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/data');
  });

  it('should say DataCtrl', function () {
    expect(dataPage.heading.getText()).toEqual('data');
    expect(dataPage.text.getText()).toEqual('DataCtrl');
  });
});
