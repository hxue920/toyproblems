// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
function rockPaperPermutation (roundCount) {

  var rps = ["r", "p", "s"];
  var result = [];
  var n = 2;
  if (roundCount === 0) {
    return [];
  }
  if (roundCount === 1) {
    return rps;
  }
  while (n <= roundCount) {
    var temp = ["r", "p", "s"]
    if (tempResult) {
      temp = tempResult.slice();
    }

    var tempResult = [];
    temp.forEach(function(ele) {
      rps.forEach(function(item) {
        tempResult.push(ele+item);
      });
    });
    result = tempResult;
    n++;
  }
  return result;
}

// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.
function firstNonRepeatedCharacter (string) {

  var strArray = string.split("");
  var letterObj = {}
  strArray.forEach(function(letter) {
    if (letterObj[letter] === undefined) {
      letterObj[letter] = 1;
    } else {
      letterObj[letter]++;
    }
  });
  for (var key in letterObj) {
    if (letterObj[key] === 1) {
      return key;
    }
  }
  return "sorry";
}
