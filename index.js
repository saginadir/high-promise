module.exports = function highPromise(fn) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    return new Promise(function(resolve, reject) {
      return fn.apply(this, [resolve, reject].concat(args));
    })
  };
};