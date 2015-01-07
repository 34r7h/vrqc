/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , VrqcDirectivesPagePo = require('./vrqc-directives.po');

describe('Vrqc directives page', function () {
  var vrqcDirectivesPage;

  beforeEach(function () {
    vrqcDirectivesPage = new VrqcDirectivesPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/vrqc-directives');
  });

  it('should say VrqcDirectivesCtrl', function () {
    expect(vrqcDirectivesPage.heading.getText()).toEqual('vrqcDirectives');
    expect(vrqcDirectivesPage.text.getText()).toEqual('VrqcDirectivesCtrl');
  });
});
