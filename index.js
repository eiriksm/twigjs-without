module.exports = function(T) {
  T.extendFilter('without', function(value, args) {
    var output = '';
    for (var i = 0, len = args.length; i < len; i++) {
      delete value[args[i]];
    }
    for (var prop in value) {
      output += value[prop];
    }
    return output;
  });
};
