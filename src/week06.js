function orderWeight(string) {
  var strArr = string.split(" ");
  var result = strArr.sort(compare).join(" ");
  return result;
}

function compare(ele1, ele2) {
  var newEle1 = ele1.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  var newEle2 = ele2.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  if (ele1 === ele2) return 0;
  if (newEle1 > newEle2) {
    return 1;
  } else if (newEle1 === newEle2) {
    return ele1.toString() > ele2.toString() ? 1 : -1;
  } else {
    return -1;
  }
}

function assert(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else {
    console.log('test passed');
  }
}

function testArrayEquality(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function mix(s1, s2) {
  var arr = [];
  var obj1 = s1.match(/[a-z]/g).reduce(function(prev, curr) {
    prev[curr] ? prev[curr] += 1 : prev[curr] = 1;
    return prev;
  }, {});
  var obj2 = s2.match(/[a-z]/g).reduce(function(prev, curr) {
    prev[curr] ? prev[curr] += 1 : prev[curr] = 1;
    return prev;
  }, {});

  console.log(obj1, obj2);

  for (key in obj1) {
    if (obj1[key] > 1) {
      if (obj2[key]) {
        if (obj1[key] > obj2[key]) {
          arr.push([key, obj1[key], '1:', 1]);
        } else if (obj1[key] < obj2[key]) {
          arr.push([key, obj2[key], '2:', 2]);
        } else {
          arr.push([key, obj1[key], '=:', 3]);
        }
        delete obj1[key];
        delete obj2[key];
      } else {
        arr.push([key, obj1[key], '1:', 1]);
        delete obj1[key];
      }
    }
  }
  for (key in obj2) {
    if (obj2[key] > 1) {
      arr.push([key, obj2[key], '2:', 2]);
    }
  }
  arr.sort(function(a, b) {
    if (a[1] === b[1]) {
      if (a[3] === b[3]) {
        return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
      }
      return a[3] - b[3];
    }
    return b[1] - a[1]
  })
  console.log(arr);
  var result = arr.map(function(item) {
    return item[2] + item[0].repeat(item[1]);
  }).join('/');
  console.log(result);
  return result;
}


// Palindrome chain length


// Convert string to camel case
