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
   // var memo = {};
   // var storage = [];
   // var copy = ints.slice();
   // var result;

   // for (var i = 0; i < ints.length; i++) {
   //    if (memo[i]) {
   //      break;
   //    } else {
   //      for (var j = i+1; j < ints.length; j++) {
   //        if (ints[i] + ints[j] === s) {
   //          storage.push([i,j]);
   //          memo[j] = true;
   //        }
   //      }
   //    }
   // }
   // while (copy.length >= 2) {
   //  for (var i = 0; i < copy.length; i++) {
   //    for (var j = i+1; j < copy.length; j++) {
   //        if (copy[i] + copy[j] === s) {
   //          result = [copy[i], copy[j]];
   //          copy = copy.slice(i+1, j);
   //          break;
   //        } else {
   //          copy = copy.slice(i+1);
   //          break;
   //        }
   //    }
   //  }
   //  console.log(copy);
   // }
   // console.log(storage);
   // if (storage.length === 0) {
   //   return;
   // }
   // storage.sort(function(a, b) {
   //   return a[1] - b[1];
   // });
   // return [ints[storage[0][0]], ints[storage[0][1]]];
   // return result;
   var storage = {};
   var result;
   ints.forEach(function (num, idx) {
      if (!storage[num]) {
        storage[num] = idx;
      }
   })
   for (var i = 0; i < ints.length; i++) {
    delete storage[ints[i].toString()];
    var temp = storage[(s-ints[i]).toString()];


    if (temp) {
      if (result) {
        if (result[1] > temp) {
          result = [i, temp];
          delete storage[(s-ints[i]).toString()];
        }
      } else {
        result = [i, temp];
      }
    }
   }

   return result ? [ints[result[0]], ints[result[1]]] : result;
}

console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6));
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8));