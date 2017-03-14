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
  if (ele1 === ele2) return 0;
  if (newEle1 > newEle2) {
    return 1;
  } else if (newEle1 === newEle2) {
    return parseInt(newEle1.toString()[0]) < parseInt(newEle2.toString()[0]) ? 1 : -1;
  } else {
    return -1;
  }
}
function swap(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));