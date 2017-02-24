var charObj = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};

var encode = function(str) {
  //enter function
  var position = 0;
  var strArr = str.split("");
  var firstAlpha = false;
  var results = strArr.map(function(char) {
    if (charObj[char.toUpperCase()]) {
      if (!firstAlpha) {
        firstAlpha = true;
        position = charObj[char.toUpperCase()];
        return char.toUpperCase();
      }
      var move = charObj[char.toUpperCase()] + position > 26 ? charObj[char.toUpperCase()] + position - 26 : charObj[char.toUpperCase()] + position;
      for (key in charObj) {
          if (charObj[key] === move) {
            position = charObj[char.toUpperCase()];
            char = key;
          }
      }
    }
    return char;
  });

  results = results.join("");
  return results;
}

var decode = function() {
  //enter function
  var position = 0;
  var strArr = str.split("");
  var firstAlpha = false;
  var results = strArr.map(function(char) {
    if (charObj[char.toUpperCase()]) {
      if (!firstAlpha) {
        firstAlpha = true;
        position = charObj[char.toUpperCase()];
        return char.toUpperCase();
      }
      var move = charObj[char.toUpperCase()] - position < 0 ? 26 + charObj[char.toUpperCase()] - position : charObj[char.toUpperCase()] - position;
      for (key in charObj) {
          if (charObj[key] === move) {
            char = key;
          }
      }
      position = charObj[char.toUpperCase()];
    }
    return char;
  });

  results = results.join("");
  return results;
}