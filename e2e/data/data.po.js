/*global element, by*/
'use strict';

var DataPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = DataPage;
