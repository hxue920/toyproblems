function add(n){
  var fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}
// PaginationHelper

function humanReadable(seconds) {
  // TODO
  var leftover = seconds;
  var reminder, sec, min, hour;
  var arr = [60,60,100];
  for (var i = 0; i < arr.length; i++) {
    if (leftover >= arr[i]) {
      var temp = Math.floor(leftover / arr[i]);
      arr[i] = leftover % arr[i];
      leftover = temp;
    } else {
      arr[i] = leftover;
      leftover = 0;
    }
  }
  return arr;
}

console.log(humanReadable(60));