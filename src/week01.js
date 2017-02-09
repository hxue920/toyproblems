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