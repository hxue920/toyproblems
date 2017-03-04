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
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
function comp(array1, array2){
  return (array1===null || array2===null) ? false : array2.every(function(element) {
    console.log(element);
    return array1.includes(Math.sqrt(element));
  });
}
console.log(comp(null, null));