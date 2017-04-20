function chain(fns) {
  var obj = fns;
  for (var fn in obj) {
    obj[fn] = function() {
      obj.value = obj[fn];
      return this;
    }
  }
  obj[fn].bind(this, this.value || null);
  obj.value = 0;
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

console.log(c.sum(1,2).execute());