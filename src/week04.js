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