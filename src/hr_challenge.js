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

// Is Subset Of
// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(array) {
  var counter = 0;
  this.forEach(function(element) {
    if (array.includes(element)) {
      counter += 1;
    }
  });
  return counter === this.length;
};

// nthFibonacci
// Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

// Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.

// Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.

// How many pairs of iguanas will there be after n months?

// For example, the iguana pair size for months zero through five are:

// 0 1 1 2 3 5
// If n were 4, your function should return 3; for 5, it should return 5.

// HINT: This iguana pattern is described exactly by the fibonacci sequence:

// https://en.wikipedia.org/wiki/Fibonacci_number

// Write a function that accepts a number n and returns the number of iguana pairs after n months.

// DO NOT use a recursive solution to this problem. Your solution must run in linear time.

// Note: Your solution may fail if you have a comment in your nthFibonacci function that contains the string literal “nthFibonacci” somewhere within it.

nthFibonacci = function(n) {
  if (n < 2) {
    return n;
  }
  var counter = 2;
  var current = 0;
  var previous = 1;
  var prePrevious = 0
  while (counter <= n) {
    current = previous + prePrevious;
    prePrevious = previous;
    previous = current;
    counter += 1;
  }
  return current;
};

// Bubble Sort
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

var bubbleSort = function(array) {
  var n = array.length;
  var arrayCopy = array.slice();
  var temp;
  while (n > 0) {
    for (var i = 0; i < array.length-1; i++) {
      if (arrayCopy[i] > arrayCopy[i+1]) {
        temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[i+1];
        arrayCopy[i+1] = temp;
      }
    }
    n-=1;
  }
  return arrayCopy;
};

// Common Characters
// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

commonCharacters = function(string1, string2){
  var strArr = string1.split("");
  console.log(strArr);
  var result = [];
  for (var i = 0; i < strArr.length; i++) {
    if (string2.indexOf(strArr[i])!==-1&&strArr[i]!==" "&&result.indexOf(strArr[i])===-1) {
      result.push(strArr[i]);
    }
  }
  return result.join("");
};

// Tree Depth-First Select
// Implement a depth-first method on a tree class.

// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

// Example:

// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// root1.DFSelect(function (value, depth) {
//   return value % 2 === 1;
// }) //=> [1, 5, 3, 7]

// root1.DFSelect(function (value, depth) {
//   return depth === 1;
// }) //=> [2, 3]
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  //YOUR CODE HERE
  var result = [];

  function findSolution (node, n) {
    if (filter(node.value, n)) {
      result.push(node.value);
    }
    for (var i = 0; i < node.children.length; i++ ) {
      findSolution(node.children[i], n+1);
    }
  }
  findSolution(this, 0);
  return result;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
