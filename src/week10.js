function chain(fns) {
  var obj = fns;
  obj.value = null;
  for (var fn in obj) {
    obj[fn] = function() {
      this.value ? (obj[fn].bind(this, obj.value))() : obj[fn].bind(this)();
      return this;
    }
    // obj[fn] = obj[fn].bind(this, null);
  }
  // obj[fn].bind(this, this.value || null);
  obj.execute = function() {
    return this.value
  }
  return obj;
}

function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus (x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

console.log(c.sum(1,2));