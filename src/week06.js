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

var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];
var third = [1, 9, 2, 4, 6];
var fourth = [1, 2, 3, 4, 5, 6];


assert(testArrayEquality(first, second) === true, 'it should return true when inputs are equivalent');
assert(testArrayEquality(first, third) === false, 'it should return false when inputs are different');
assert(testArrayEquality(first, fourth) === false, 'it should return false when inputs are different');