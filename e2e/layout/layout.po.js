/*global element, by*/
'use strict';

var LayoutPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = LayoutPage;
