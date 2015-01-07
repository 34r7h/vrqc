/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , WidgetsPagePo = require('./widgets.po');

describe('Widgets page', function () {
  var widgetsPage;

  beforeEach(function () {
    widgetsPage = new WidgetsPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/widgets');
  });

  it('should say WidgetsCtrl', function () {
    expect(widgetsPage.heading.getText()).toEqual('widgets');
    expect(widgetsPage.text.getText()).toEqual('WidgetsCtrl');
  });
});
