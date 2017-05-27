// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
function rockPaperPermutation (roundCount) {
    // Write your code here, and
  // return your final answer.
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
