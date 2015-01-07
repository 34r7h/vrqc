/*global element, by*/
'use strict';

var VrqcDirectivesPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = VrqcDirectivesPage;
