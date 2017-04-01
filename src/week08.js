snail = function(array) {
  var result = [];
  var dir = top = left = 0;
  var bottom = array.length - 1;
  var right = array[0].length - 1;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (var i = left; i <= right; i++) {
        result.push(array[top][i]);
      }
      top += 1;
      dir = 1;
    } else if (dir === 1) {
      for (var i = top; i <= bottom; i++) {
        result.push(array[i][right]);
      }
      right -= 1;
      dir = 2;
    } else if (dir === 2) {
      for (var i = right; i >= left; i-- ) {
        result.push(array[bottom][i]);
      }
      bottom -= 1;
      dir = 3;
    } else if (dir === 3) {
      for (var i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left += 1;
      dir = 0;
    }
  }
  return result;
}

// Secret knock

var sum_pairs=function(ints, s){
   var storage = {};
   var result = [];

   for (var i = 0; i < ints.length; i++) {
    if (storage[s - ints[i]]) {
      result.push(s-ints[i]);
      result.push(ints[i]);
      break;
    }
    storage[ints[i]] = true;
   }
   return result.length === 0 ? undefined : result;
}

console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6));
console.log(sum_pairs([20, -13, 40], -7));