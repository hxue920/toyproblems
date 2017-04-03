var countBits = function(n) {
  // Program Me
  var count = 0;
  (n >>> 0).toString(2).split("").forEach(function(char) {
    if (char === '1') {
      count += 1;
    }
  });
  return count;
};

class SmallestIntegerFinder {
  findSmallestInt(args) {
      return args.sort(function(a,b){return b - a}).pop();
  }
}

function findOdd(A) {
  var obj = A.reduce(function(prev, curr) {
    if (!prev[curr]) {
      prev[curr] = 0;
    }
    prev[curr] += 1;
    return prev;
  }, {});
  for (key in obj) {
    if (obj[key] % 2 !==0) {
      return parseInt(key);
    }
  }
}

function pigIt(str){
  //Code here
  return str.split(" ").map(function(word) {

    var wordArr = word.split("");
    console.log(wordArr);
    var newTail = wordArr.shift().concat('ay');

    wordArr.push(newTail);
    console.log(wordArr.join(""));
    return wordArr.join("");
  }).join(" ");
}
function comp(array1, array2){
  return !array1 || !array2 ? false : JSON.stringify(array1.sort(function(a,b) {return a - b})) === JSON.stringify(array2.map(function(ele) {return Math.sqrt(ele)}).sort(function(a,b) {return a - b}))
}

function tripledouble(num1, num2) {
  var storage1 = [];
  var storage2 = [];
  var numStr1 = num1.toString();
  var numStr2 = num2.toString();
  var result = 0;

  fillStorage(numStr1, 2, storage1);
  fillStorage(numStr2, 1, storage2);
  console.log(storage1, storage2);
  storage1.forEach(function(ele) {
    if (storage2.includes(ele)) {
      result = 1;
    }
  })
  return result;
}

function fillStorage(str, limit, storage) {
  var count = 1;
  var char = str[0];
  var idx = 1
  while (idx <= str.length) {
    if (str[idx] === char) {
      count += 1;
    } else {
      if (count > limit) {
        storage.push(char);
      }
      count = 1;
      char = str[idx];
    }
    idx += 1;
  }
}
