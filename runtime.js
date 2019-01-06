module.exports = function isNotProductionNow() {
  return typeof process === 'undefined'
    || !process.env || process.env.NODE_ENV !== 'production';
}
