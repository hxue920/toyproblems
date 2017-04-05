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
  // your code
  var obj1 = s1.match(/[a-z]/g).reduce(function(prev, curr) {
    return prev[curr] ? prev[curr] = 1 : prev[curr] += 1;
  }, {});
  var obj2 = s2.match(/[a-z]/g).reduce(function(prev, curr) {
    return prev[curr] ? prev[curr] = 1 : prev[curr] += 1;
  }, {});

  console.log(obj1, obj2);
}

console.log(mix("Are they here", "yes, they are here"));

// Palindrome chain length


// Convert string to camel case
