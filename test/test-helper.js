import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

// Set up test envirnoment 
global.document = jsdom.jsdom('<!doctype html><html><body></body</html>'); 
global.window = global.document.defaultView;

// Add navigtor to global scope for react router
global.navigator = {
  userAgent: 'node.js'
};

// make jquery look at the fake dom provided by jsdom
const $ = jquery(global.window);

// Build renderComponent helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
      <ComponentClass {...props} />
  );
  
  // Produce HTML
  return $(ReactDOM.findDOMNode(componentInstance));   
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai jQuery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect }