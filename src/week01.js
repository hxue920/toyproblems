function nestedWordCount (wordList) {
  // Write your code here, and
  // return your final answer.
  var listObj = {};
  var listArr = [];

  wordList.forEach(function(target, index) {
    var copy = wordList.slice();
    copy.splice(index, 1);
    console.log(copy);
    copy.forEach(function(word) {
      if (word.includes(target)) {
        if (listObj[word] === undefined) {
          listObj[word] = 1;
        }
        listObj[word] += 1;
      }
    })
  })
  for (var key in listObj) {
    listArr.push([key, listObj[key]]);
  }
  listArr.sort(function(a, b) {
    return b[1] - a[1];
  });
  return listArr[0][0];
}

function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
  var strObj = {};
  var strArr = str.split("");
  strArr.forEach(function(char) {
    if (strObj[char] === undefined) {
      strObj[char] = 0;
    }
    strObj[char] += 1;
  });
  console.log(strObj);
  for (var i = 0; i < str.length; i++) {
    if (strObj[str[i]] > 1) {
      strArr.forEach(function(item, index) {
        if (item === str[i]) {
          strArr.splice(index, 1);
        }
      })
    }
  }
  return strArr.join("");

}

function getPonyAllergies (ponies, ownerEmail) {
  // Write your code here, and
  // return your final answer.
  return ponies.filter(function(obj) {
    return getProp("email")(obj) === ownerEmail;
  }).map(function(obj) {
    return obj["allergies"];
  }).concatAll().sort().reduce(function(accu, curr) {
    if (accu.includes(curr)) {
      return accu;
    }
    accu.push(curr);
    return accu;
  },[]);
}

function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  var result = [];
  var dir = top = left = 0;
  var bottom = matrix.length - 1;
  var right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (var i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
      dir = 1;
    } else if (dir === 1) {
      for (var i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      dir = 2;
    } else if (dir === 2) {
      for (var i = right; i >= left; i-- ) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      dir = 3;
    } else if (dir === 3) {
      for (var i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
      dir = 0;
    }
  }
  return result;
}

