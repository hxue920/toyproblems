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
  var obj1 = {};
  var obj2 = {};
  console.log(num1, num2);
  var arr1 = num1.toString().match(/(.)\1{2,}/);
  var arr2 = num2.toString().match(/(.)\1{1,}/)
  console.log(arr1);
  console.log(arr2);
  num1.toString().split("").forEach(function(char) {
    if (!obj1[char]) {
      obj1[char] = 0;
    }
    obj1[char]+=1;
  });
  console.log(obj1);
  num2.toString().split("").forEach(function(char) {
    if (!obj2[char]) {
      obj2[char] = 0;
    }
    obj2[char]+=1;
  });
  console.log(obj2);
  for (key in obj1) {
    if (obj1[key] === 3) {
      if (obj2[key] === 2) {
        return 1;
      }
    }
  }
  return 0;
}