function chain(fns) {
  var obj = fns;
  obj.value = null;
  for (var fn in obj) {
    var temp = obj[fn];
    console.log(temp);
    obj[fn] = function() {
      if (this.value) {
        console.log(temp);
        this.value = temp.bind(this, this.value)();
      } else {
        this.value = temp.apply(this, arguments);
      }
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
  while (fastNode !== slowNode) {
    fastNode = fastNode.next;
    count += 1;
  }
  return count - 1;
}