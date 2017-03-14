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

function orderWeight(strng) {
    // your code
}

function compare(ele1, ele2) {
  var newEle1 = ele1.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  var newEle2 = ele2.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  if (newEle1 > newEle2) {
    return true;
  } else if (newEle1 === newEle2) {
    newEle1.toString()[0] > newEle2.toString()[0] ? true : false;
  } else {
    return false;
  }
}
function swap(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(compare(100, 99));