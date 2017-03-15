function orderWeight(string) {
  var strArr = string.split(" ");
  // for (var i = 1; i < strArr.length; i++) {
  //   if (compare(strArr[i-1], strArr[i])) {
  //     swap(i-1, i, strArr);
  //   }
  // }
  var result = strArr.sort(compare).join(" ");
  return result;
}

function compare(ele1, ele2) {
  var newEle1 = ele1.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  var newEle2 = ele2.toString().split("").reduce(function(accu, curr) {return accu + parseInt(curr)}, 0);
  if (newEle1 > newEle2) {
    console.log("here");
    return 1;
  }
  if (newEle1 === newEle2) {
    // console.log(ele1, ele2);
    console.log(newEle1, newEle2);
    // return parseInt(newEle1.toString()[0]) > parseInt(newEle2.toString()[0]) ? 1 : -1;
    if (parseInt(ele1.toString()[0]) > parseInt(ele2.toString()[0])) {
      return 1;
    } else if (parseInt(ele1.toString()[0]) < parseInt(ele2.toString()[0])) {
      return -1
    } else {
      return 0;
    }
  }
  return -1;
}
function swap(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(orderWeight("2000 11 11"));

function test(a, b) {
  return parseInt(a.toString()[0]) > parseInt(b.toString()[0]) ? 1 : -1;
}

console.log(test(2000, 11));