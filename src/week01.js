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

console.log(nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]));