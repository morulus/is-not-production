const memoizeNodeEnv = process.env.NODE_ENV;
process.env.NODE_ENV = 'development';
var assert = require('assert');
var isNotProduction = require('../index.js');
var isNotProductionNow = require('../now.js');

describe('initial', function() {
  it('truthy', function() {
    assert.equal(isNotProduction, true);
  });
});

describe('now', () => {
  it('falsy', function() {
    process.env.NODE_ENV = 'production';
    assert.equal(isNotProduction, true);
    assert.equal(isNotProductionNow(), false);
  });
  it('truthy', function() {
    process.env.NODE_ENV = 'test';
    assert.equal(isNotProductionNow(), true);
  });
});
process.env.NODE_ENV = memoizeNodeEnv;
