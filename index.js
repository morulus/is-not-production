const isNotProductionRuntime = require('./runtime.js');

var isNotProduction = isNotProductionRuntime();

module.exports = isNotProduction;
