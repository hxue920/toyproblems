function chain(fns) {
  var obj = fns;

  obj.execute = function(value) {
    return value;
  }
  return obj;
}