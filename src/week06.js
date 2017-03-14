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