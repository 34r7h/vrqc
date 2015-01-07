/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , ModelsPagePo = require('./models.po');

describe('Models page', function () {
  var modelsPage;

  beforeEach(function () {
    modelsPage = new ModelsPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/models');
  });

  it('should say ModelsCtrl', function () {
    expect(modelsPage.heading.getText()).toEqual('models');
    expect(modelsPage.text.getText()).toEqual('ModelsCtrl');
  });
});
