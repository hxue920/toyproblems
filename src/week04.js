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