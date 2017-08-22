const isNotProductionNow = require('./now.js');

var isNotProduction = isNotProductionNow();

module.exports = isNotProduction;
