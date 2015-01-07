/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , ServicesPagePo = require('./services.po');

describe('Services page', function () {
  var servicesPage;

  beforeEach(function () {
    servicesPage = new ServicesPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/services');
  });

  it('should say ServicesCtrl', function () {
    expect(servicesPage.heading.getText()).toEqual('services');
    expect(servicesPage.text.getText()).toEqual('ServicesCtrl');
  });
});
