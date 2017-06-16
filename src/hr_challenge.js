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

// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
function largestProductOfThree (array) {
  var sortedArray = array.slice().sort(function(a,b) {return Math.abs(b) - Math.abs(a)});
  var sortedArray2 = array.slice().sort(function(a,b) {return b - a});
  var result;

  if (sortedArray2[0]<0) {
    result = sortedArray2[0]*sortedArray2[1]*sortedArray2[2];
    return result;
  } else {
    if (sortedArray[0]*sortedArray[1]<0) {
      for (var i = 2; i < sortedArray.length; i++) {
        if (sortedArray[i]<0) {
          result = sortedArray[0]*sortedArray[1]*sortedArray[i];
          return result;
        }
      }
    } else if (sortedArray[0]*sortedArray[1]>=0){
      for (var i = 2; i < sortedArray.length; i++) {
        if (sortedArray[i]>=0) {
          result = sortedArray[0]*sortedArray[1]*sortedArray[i];
          return result;
        }
      }
    }
  }

}

// Deep Equality
// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.
deepEquals = function(a, b){
  if (a === b) {
    return true;
  }
  if (typeof a != "object" || Array.isArray(a) === true || typeof b != "object" || Array.isArray(b) === true) {
    return false;
  }
  var propsInA = 0;
  var propsInB = 0;
  for (var prop in a) {
    propsInA += 1;
  }
  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEquals(a[prop], b[prop])) {
      return false;
    }
  }
  return propsInA === propsInB;
};

// Island Count
// Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.

function countIslands (mapStr) {
  var mapArr = mapStr.split('\n').map(function(row) {return row.split("");});
  var count = 0;
  for (var i = 0; i < mapArr.length; i++) {
    for (var j = 0; j < mapArr[i].length; j++) {
      if (isLand(mapArr[i][j])) {
        count += 1;
        sinkLand(mapArr, i, j);
      }
    }
  }
  return count
}

function isLand(piece) {
  if (piece === "0") {
    return true;
  } else {
    return false;
  }
 }

function sinkLand(mapArr, row, col) {
  if (row < 0 || col < 0 || row >= mapArr.length || col >= mapArr[row].length || !isLand(mapArr[row][col])) {
    return;
  };
  mapArr[row][col] = "."
  sinkLand(mapArr, row-1, col);
  sinkLand(mapArr, row+1, col);
  sinkLand(mapArr, row, col+1);
  sinkLand(mapArr, row, col-1);
}

// Binary Search Array
// Given a sorted array of integers, find the index of a target value using a binary search algorithm.

// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


// Note:
// Your function should return -1 for target values not in the array.

// Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?




// Parameters:


// array (required) - an array.

// target (required) - an integer value.

function binarySearch (array, target) {
  var arrayObj = array.reduce(function(memo, curr, index) {
    memo[curr] = index;
    return memo;
  }, {});
  var result = -1;

  function searchSolution(array, target) {
      if (array.length === 1) {
        if (array[0] === target) {
          result = arrayObj[array[0]];
        }
        return;
      } else if (array[Math.floor(array.length / 2)] === target) {
        result = arrayObj[array[Math.floor(array.length / 2)]];
        return;
      }
      if (array[Math.floor(array.length / 2)] > target) {
        return searchSolution(array.slice(0, Math.floor(array.length / 2)), target);
      } else if (array[Math.floor(array.length / 2)] < target) {
        return searchSolution(array.slice(Math.floor(array.length / 2)), target);
      }
  }
  searchSolution(array, target);
  return result;
}

// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
function powerSet (string) {
  var sets = [""];
  var uniqueArr = string.split("").filter(function(char, idx, arr) {return arr.indexOf(char) === idx;});


  for (var i = 0; i < uniqueArr.length; i++) {
    concatChar(uniqueArr[i], sets);
  }

  for (var j = 0; j < sets.length; j++) {
    sets[j] = sets[j].split("").sort().join("");
  }
  return sets.sort();
}

function concatChar(char, sets) {
  var copy = sets.slice();
  for (var i = 0; i < copy.length; i++) {
    sets.push(copy[i].concat(char));
  }
}

// Tree Breadth-First Select
// Implement a breadth-first method on a tree class.

// BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.

// Example:

// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// root1.BFSelect(function (value, depth) {
//   return value % 2;
// }) //=> [1, 3, 5, 7]

// root1.BFSelect(function (value, depth) {
//   return depth === 1;
// }) //=> [2, 3]

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();

  //Your code here
  var result = [];
  var curr;
  queue.enqueue({node: this, depth: 0});

  while (curr = queue.dequeue()) {
    if (filter(curr.node.value, curr.depth)) {
      result.push(curr.node.value);
    }
    for (var i = 0; i < curr.node.children.length; i++) {
      queue.enqueue({node: curr.node.children[i], depth: curr.depth+1});
    }
  }
  return result;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

// Compose, Pipe
// Implement the functions compose and pipe.

// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'
// Pipe:
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// Example
// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// pipe(add2, multiplyBy3)(5) //=> 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
// HINT: You should use the functions reduce() and reduceRight() in your solutions.

var compose = function(){

  var args = Array.prototype.slice.call(arguments);
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return args.reduceRight(function(memo, curr) {
      memo = curr.call(this, memo);
      return memo;
    }, args2[0]);
  }
};

var pipe = function(){

  var args = Array.prototype.slice.call(arguments);
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return args.reduce(function(memo, curr) {
      memo = curr.call(this, memo);
      return memo;
    }, args2[0]);
  }
};

// Rotated Array Search
// If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.



// Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.

function rotatedArraySearch (rotated, target) {
  var left = 0, right = rotated.length-1;
  while (left <= right) {
    var split = Math.floor((left + right)/2);
    if (rotated[split] === target) {
      return split;
    }
    if (rotated[left] <= rotated[split]) {
      if(rotated[left]<=target && rotated[split] > target) {
        right = split - 1;
      } else {
        left = split + 1;
      }
    } else {
      if(rotated[split] < target && rotated[right] >= target) {
        left = split + 1;
      } else {
        right = split - 1;
      }
    }
  }
  return -1;
}

// Range Class
// Build a class to represent a range of numbers that has:

// a beginning index
// an end index (optional). If there is no end index, the range should include only the passed-in start value.
// a ‘step’ (optional)
// it should not store the range as an array of numbers; it should work in constant space.
// The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.

// You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.

// The range should have a constructor that accepts these arguments in this order:

// beginning index
// end index
// step interval
// It should also support the following utility functions:

// size(): return the number of items represented by the range
// each(callback(index)): iterate over the range, passing each value to a callback function
// includes(index): return whether or not the range includes the passed value
// You should also be aware of the following caveats:

// Should return null if we are given no ‘start’ value.
// Again, Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.

var Range = function(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;
  if (this.start === undefined) {
    return null;
  }
  if (this.end === undefined) {
    this.end = this.start;
  }
  if (this.step === undefined) {
    this.step = (this.end >= this.start) ? 1 : -1;
  }


};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start)/this.step) + 1;
};

Range.prototype.each = function (callback) {
  if (this.start < this.end) {
    for (var i = this.start; i <= this.end; i+=this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i+=this.step) {
      callback(i);
    }
  }

};

Range.prototype.includes = function (val) {
  if (this.start <= this.end) {
    for (var i = this.start; i <= this.end; i+=this.step) {
      if (i === val) {
        return true;
      }
    }
  } else {
    for (var i = this.start; i >= this.end; i+=this.step) {
      if (i === val) {
        return true;
      }
    }
  }
  return false;
};

// Balanced Brackets
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

function isBalanced (str) {
  var stack = [];
  var brackets = {'(': ')', '{': '}', '[': ']'};
  for (var i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      if (brackets[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length===0;
}

// Async Map
// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

var asyncMap = function(tasks, callback){
  var resultArr = [];
  var resultCount = 0;
  for (let i = 0; i< tasks.length; i++) {
    tasks[i](function(result) {
      resultArr[i] = result;
      resultCount+=1;
      if(resultCount === tasks.length){
        callback(resultArr);
      }
    });
  }
};

// Longest Run
// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

function longestRun (string) {
  var charCount = 1;
  var currStr;
  var result;
  if (string === "") {
    return [0, 0];
  }
  var strArr = string.match(/([a-zA-Z])\1*/gi);
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > charCount) {
      currStr = strArr[i];
      charCount = strArr[i].length;
    }
  }
  if (charCount === 1) {
    return [0, 0];
  }
  result = [string.indexOf(currStr), (string.indexOf(currStr)+currStr.length-1)];

  return result;
}

// Merge Sort
// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)

// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

// Illustration of an iterative approach:

//   1.Initial step: Input array is split into "sorted" sublists
//      [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

//   2.Merge step: Adjacent sublists are merged into sorted sublists
//      [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

//   3.Repeat merge step:
//      [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

//   4.Repeat merge step:
//      [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

//   5.Done! Return the sorted array:
//      [1,2,3,4,4,7,9]
// Illustration of a recursive approach:

//   1.Split the input array in half
//    [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

//   2.Both sides are sorted recursively:
//    [4, 7, 4] -> [4, 4, 7]
//    [3, 9, 1, 2] -> [1, 2, 3, 9]

//   3.Both halves are merged:
//    [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
// Step 2 might seem a bit mystical - how do we sort both sides? The
// simple answer is that we use mergesort! After all, mergesort sorts
// arrays, right? We can test this on [4, 7, 4] by just following the
// steps above but imagining that [4, 7, 4] is the whole array, which
// is what happens when you call mergesort on it.

//    1.Split the input array in half
//      [4, 7, 4] -> [4], [7, 4]

//    2.Both sides are sorted recursively:
//     [4] -> [4]
//     [7, 4] -> [4, 7]

//    3.Both halves are merged:
//    [4], [4, 7] -> [4, 4, 7]
// I cheated again by going directly from [7, 4] to [4, 7], but that’s
// really just:

//   1.Split the input array in half
//     [7, 4] -> [7], [4]

//   2.Both sides are sorted recursively:
//     [7] -> [7]
//     [4] -> [4]

//   3.Both halves are merged:
//     [7], [4] -> [4, 7]
// As you can see, all the work actually gets done in step 3, the merge
// step. Everything else is just splitting and recursing.

// Mergesort is an optimized sorting algorithm which is a common choice to implement sort
// methods in standard libraries as an alternative to quicksort or heapsort. (For example,
// Firefox’s Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
// Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

function mergeSort(arr){
  if (arr.length <= 1) {
    return arr;
  }
  var split = Math.floor(arr.length/2);
  var left = arr.slice(0, split);
  var right = arr.slice(split);

  function mergeSolution(left, right) {
    var i = 0, j = 0, result = [];
    while (left.length>i && right.length>j) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    var leftover = i === left.length? right.slice(j): left.slice(i);
    return result.concat(leftover);
  }

  return mergeSolution(mergeSort(left), mergeSort(right));
}

// Fraction Converter
// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.
function fractionConverter (number) {
  var num = number;
  var denom = 1;
  while (num%1 !==0) {
    num = parseFloat(num*10).toPrecision(12);
    denom *= 10;
  }
  var gcd = 1;
  for (var i = Math.abs(num); i>1; i--) {
    if (num%i === 0 && denom%i === 0) {
      gcd = i;
      break;
    }
  }
  return num/gcd + '/' + denom/gcd;
}

// Rotate Matrix
// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.

// 2x2 MATRIX EXAMPLE:

// [ [1, 2],
// [3, 4] ]

// Rotated:

// [ [3, 1],
// [4, 2] ]

// 4x4 MATRIX EXAMPLE:

// [ [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, “A”,”B”,”C”],
// [“D”,”E”,”F”,”G”] ]

// Rotated:

// [ [“D”, 9, 5, 1],
// [“E”, “A”, 6, 2],
// [“F”,”B”, 7, 3],
// [“G”,”C”, 8, 4] ]

// EXTRA CREDIT
// - Make your function operate on rectangular matrices (MxN rather than NxN).
// - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)

// Important note:
// In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of rows and n is the number of columns. So an [i][j] address in a matrix will be i places down, and j places over. This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down.

function rotateMatrix (matrix) {
  var resultArr = [];
  for (var i=0; i<matrix[0].length; i++) {
    var tempArr = [];
    for (var j=matrix.length-1; j>=0; j--) {
      tempArr.push(matrix[j][i]);
    }
    resultArr.push(tempArr);
  }
  return resultArr;
}
