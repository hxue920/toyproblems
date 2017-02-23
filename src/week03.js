var charObj = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};

var encode = function(str) {
  //enter function
  var position = 0;
  var strArr = str.split("");
  var firstChar = strArr.shift();
  if (charObj[firstChar.toUpperCase()]) {
    position = charObj[firstChar.toUpperCase()];
  }
  var result = strArr.map(function(char) {
    if (charObj[char.toUpperCase()]) {
      if (position > 0) {
        var move = charObj[char.toUpperCase()] + position > 26 ? charObj[char.toUpperCase()] + position - 26 : charObj[char.toUpperCase()] + position;
        console.log(move);
        for (key in charObj) {
          if (charObj[key] === move) {
            char = key;
            position = charObj[key];
          }
        }
      }
    }
    // console.log(position);
    return char;
  })
  result.unshift(firstChar);
  result = result.join("");
  console.log(result);
  return result;
}

var decode = function() {
  //enter function
}