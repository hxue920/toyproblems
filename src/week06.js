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