function chain(fns) {
  function chainWrapper(val) {
    this.value = val;
  }

  // for (var fn in fns) {
  Object.keys(fns).forEach(function(fn) {
    var func = fns[fn];
    chainWrapper.prototype[fn] = function() {
      var args = Array.prototype.slice.call(arguments);
      if (this.value !== null) {
        args.unshift(this.value);
      }
      console.log(func);
      var val = func.apply(null, args);
      console.log(val);
      return new chainWrapper(val);
    }
  });
  chainWrapper.prototype.execute = function() {
    return this.value
  }
  return new chainWrapper();
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

console.log(c.sum(1, 2).minus(3).execute());


function loop_size(node){
  console.log(node);
  var fastNode = node;
  var slowNode = node;
  var count = 0;

  while (fastNode.next.next !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;

    if (slowNode === fastNode) {
      break;
    }
  }
  fastNode = fastNode.next;
  while (fastNode !== slowNode) {
    fastNode = fastNode.next;
    count += 1;
  }
  return count - 1;
}