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
  var result = arr.reverse().map(function(ele) {
    if (ele > 99) {
      return "99";
    } else if (ele > 9) {
      return ele.toString();
    } else {
      return "0" + ele;
    }
  }).join(":");
  return result;
}

