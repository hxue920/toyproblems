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

// Examples
// Input Output
// matrix:
// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]  [ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ]
// matrix:
// [ [ 1 ] ] [ [ 1 ] ]
// matrix:
// [ [ 1, 2 ], [ 3, 4 ] ]  [ [ 3, 1 ], [ 4, 2 ] ]
// matrix:
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

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

// Shuffle Deck
// Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.

// Example:

//  var deck = orderedDeck();
//  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
//  shuffleDeck(deck);
//  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
// Note:
// A shuffled deck should be completely random. That means that a given card should be as likely as any other to appear in a given deck index, completely independent of the order of the input deck. Think carefully about how to be sure your algorithm generates a properly shuffled deck– it is easy to accidentally create a biased algorithm.

// A further note on randomness:
// Technically, a computer-shuffled deck will usually be “pseudorandom”, not “truly” random. However, the difference between the two is too small to be detectable by any known test. See http://en.wikipedia.org/wiki/Pseudorandom_number_generator
// A human shuffler is much more biased; it takes around seven normal “riffle” shuffles before a real deck is actually randomized. See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf

// Extra credit:
// - Even a naive algorithm can easily run in linear time. However, does your algorithm remain unbiased as N (the deck size) increases? How do you know?
// - Once you have created a properly random, linear algorithm, what is its space complexity? There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).

var shuffleDeck = function(deck) {
  var randomIdx;
  var temp;
  var deckSize = deck.length

  for (var i = 0; i<deckSize; i++) {
    randomIdx = Math.floor(Math.random()*(i+1));
    temp = deck[i];
    deck[i] = deck[randomIdx];
    deck[randomIdx] = temp;
  }
  return deck;
}

// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return "null" on invalid input.
function translateRomanNumeral (romanNumeral) {
  if (romanNumeral === "") {
    return 0;
  }
  var sum = 0, pre, curr;

  for (var i = 0; i < romanNumeral.length; i++) {
    if (!(romanNumeral[i] in DIGIT_VALUES)) {
      return "null";
    }
    curr = DIGIT_VALUES[romanNumeral[i]];
    sum += curr;
    console.log("curr: ", curr, "sum: ", sum, "pre: ", pre);
    if (pre!==undefined && pre < curr) {
      sum -= pre*2;
    }
    pre = curr;
  }
  return sum;
}

// Hash Table
// Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.
var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //YOUR CODE HERE
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          var preValue = storage[index][i][1];
          storage[index][i][1] = value;
          return preValue;
        }
      }
      storage[index].push([key, value]);
    };

    table.retrieve = function(key){
      //YOUR CODE HERE
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      if (storage[index] === []){
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };

    table.remove = function(key){
      //YOUR CODE HERE
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      if (storage[index] === []){
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index].splice(i, 1);
          }
        }
      }
    }
    return table;
  };
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

// Linked List
// Implement a linked-list
var LinkedList = function (initialValue) {
// Write your code here
  var initialValue = initialValue || null
  var node = new Node(initialValue);
  this.head = node;
  this.tail = node;

};

LinkedList.prototype.addToTail = function(value) {
  var newTail = new Node(value);
  if (!this.head.value) {
    this.head = newTail;
  }
  if (this.tail.value) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
}
LinkedList.prototype.removeHead = function() {
  if (this.head.next === null) {
    delete this.head;
    delete this.tail;
    return null;
  } else {
    var currHead = this.head;
    this.head = this.head.next;
    return currHead;
  }
}
LinkedList.prototype.contains = function(value) {
  var currNode = this.head;
  while (currNode) {
    if (currNode.value === value) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
}

var Node = function(value) {
  var node = {}
  node.value = value;
  node.next = null;
  return node;
}
// etc...

// Queue Stack
// Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.
var Stack = function() {
  var storage = [];
  var length = 0;

  this.push = function(value){
    storage[length++] = value;
  };

  this.pop = function(){
    var result = storage[--length];
    delete storage[length];
    return result;
  };

  this.size = function(){
    return length;
  };

};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    if (outbox.size()===0) {
      while (inbox.size() !== 0) {
        var temp = inbox.pop();
        outbox.push(temp);
      }
    }
    var result = outbox.pop();
    return result;
  };

  this.size = function(){
    var result = inbox.size() + outbox.size();
    return result;
  };
};


// Binary Heap
// A heap is a special kind of tree in which a parent node is ordered only in respect to its immediate children. Unlike the binary search tree you may have implemented, where the entire tree is ordered, in a heap the only order guaranteed is between a node and its parent.

// In a binary heap each node should have only zero, one, or two children. Each node must have 2 children before the next oldest node can have any children. Therefore the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and 6th nodes. In a specific kind of binary heap, the binary min heap, every node is less than its immediate children:
// ……..0…….
// …1………2..
// .3…4…..5…6
// 7……………

// There is only one place at any given time in a binary heap where a node can be added or removed. In the example above, the next node will be inserted as the second child of 3. If we were to remove a node instead, we would remove the 7. This mimics the behavior of a stack and allows us to manage the heap in a very memory efficient way, using a list or array. For example, the heap pictured above can be described as:

// [0, 1, 2, 3, 4, 5, 6, 7]

// where we always add to or remove from the end of the array.

// A well known fact, utilized with binary heaps stored in arrays, is that we can calculate the index of a node’s parent or children using math:
// parentIndex = Math.floor( (index - 1) / 2 )
// childrenIndices = [index * 2 + 1, index * 2 + 2]

// When adding a new node to a binary min heap, it could be that we violate the property of the heap whereby every node is of lower value than its children. Thus whenever we insert into a binary min heap, we must compare the inserted node to its parent, and swap their positions if it is less than its parent. After a swap it must compare itself to its new parent, continuing until it is no longer less than its parent.

// Something similar happens when we want to remove the root node. Because we can only remove from the end of the array we swap the position of the last node and the root node and then remove the now-last node from the heap. The new root node now must be compared to its children and if it is not less than both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its new children and this swapping continues until it is less than both its children.

// You can see a great visualization of a binary min heap in action here, play around with it until you can easily guess how the heap will behave with both insertion and removal: https://www.cs.usfca.edu/~galles/visualization/Heap.html

function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}
// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}
BinaryHeap.prototype.insert = function (value) {

  this._heap.push(value);
  var childIndex = this._heap.length-1;
  var parentIndex = Math.floor((childIndex-1)/2);
  while (!!this._heap[parentIndex] && this._compare(this._heap[childIndex], this._heap[parentIndex])) {
    this.swap(childIndex, parentIndex);
    childIndex = parentIndex;
    parentIndex = Math.floor((childIndex-1)/2);
  }

}
BinaryHeap.prototype.removeRoot = function () {
  // TODO: Your code here
  var result = this.getRoot();
  this.swap(this._heap.length-1, 0);
  this._heap.pop();
  var parentIndex = 0;
  var childIndex = parentIndex*2+1;
  while (!!this._heap[childIndex] && this._compare(this._heap[this.lessChild(parentIndex)], this._heap[parentIndex])) {
    this.swap(this.lessChild(parentIndex), parentIndex);
    parentIndex = this.lessChild(parentIndex);
    childIndex =  parentIndex*2+1;
  }
  return result;
}
BinaryHeap.prototype.swap = function(childIndex, parentIndex) {
  var temp = this._heap[parentIndex];
  this._heap[parentIndex] = this._heap[childIndex];
  this._heap[childIndex] = temp;
}
BinaryHeap.prototype.lessChild = function(index) {
  if ((index*2+2) < this._heap.length) {
    if (this._heap[index*2+1] > this._heap[index*2+2]) {
      return index*2+2;
    }
  } else {
    return index*2+1;
  }
}

// Robot Paths
// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

// Make your solution work for a grid of any size.

// Parameters:

// n (required) - amount of rows/columns (max 6)
function robotPaths (n, board, i, j) {
  // take a step in a direction
    // if invalid square, back to previous location and try another square,
    // if at bottom right corner, add one to count,
    // back to last vaild square and pick another direction and so on
  //return count,
  if (!board) {
    board = makeBoard(n);
    i = 0, j = 0;
  }
  var result;
  if (!(i>=0 && i<n && j>=0 && j<n) || board.hasBeenVisited(i, j)) {
    return 0;
  }
  if (i === n-1 && j === n-1) {
    return 1;
  }
  board.togglePiece(i, j);
  result = robotPaths(n, board, i-1, j) + robotPaths(n, board, i+1, j) + robotPaths(n, board, i, j-1) + robotPaths(n, board, i, j+1);
  board.togglePiece(i, j);
  return result;
}

// Even Occurrence
// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurrence (arr) {
  var arrObj = arr.reduce(function(memo, curr) {
    if (memo[curr] === undefined) {
      memo[curr] = 1;
    } else {
      memo[curr] += 1;
    }
    return memo;
  }, {});
  for (var key in arrObj) {
    if (arrObj[key] % 2 === 0) {
      if (!isNaN(key)) {
        return parseInt(key);
      }
      return key;
    }
  }
  return null;
}

// Tree Count Leaves
// Implement the countLeaves function in this Tree class.

// A leaf node is any node in the tree that has no children. countLeaves should
// traverse the tree, and return the number of leaf nodes the tree contains.

// Illustration of a tree with three leaves:

//       * <- root
//      / \
//     *    * <- leaf
//    / \
//   *   * <- leaf
//  /
// * <- leaf
// Example usage:

// var root = new Tree();

// root.countLeaves(); // 1

// root.addChild(new Tree());

// root.countLeaves(); // still 1

// root.addChild(new Tree());

// root.children[0].addChild(new Tree());

// root.children[0].addChild(new Tree());

// root.children[0].children[0].addChild(new Tree());

// root.countLeaves(); // 3

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  // TODO: implement me!
  if (this.children.length === 0) {
    return 1;
  }
  var totalLeaves = this.map(this.children, function(child) {
    return child.countLeaves();
  }).reduce(function(memo, curr){
    memo = memo + curr;
    return memo;
  }, 0);
  return totalLeaves;
}
Tree.prototype.map = function(collection, callback) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    result.push(callback(collection[i]));
  }
  return result;
}
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
    throw new Error("That child is already a child of this tree");
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
    throw new Error("That node is not an immediate child of this tree");
  }
};

// Prime Tester
// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness!


// Parameters:


// n (required) - a number.

function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i*i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
    i += 6;
  }
  return true;
}

// Prime Tester(extra credit)
//   Extra credit: Write a function that generates a list of all prime numbers in a user-specified range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling saucy, check out the Sieve of Atkin.)
// Parameters:

// startbegin of range

// endend of range (inlcusive)

function primeSieve (start, end) {
  var numArr = range(0, end);
  var prime = 2;
  while(prime<end) {
    for (var j = prime*2; j <= end; j+=prime) {
      numArr[j] = null;
    }
    prime+=1;
    while(!numArr[prime]&&prime<=end) {
      prime+=1;
    }
  }
  var result = numArr.slice(Math.max(start, 2)).filter(function(item) {
    return item;
  });
  return result;
}

function range(begin, end) {
  var result = [];
  for (var i = begin; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Insertion Sort
// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

// A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.

// EXTRA CREDIT:

// Refactor your sort to (optionally) take an explicit comparator function as its second argument, so that callers can define arbitrary ways to sort elements. See Array.prototype.sort for an example of how this works (excerpt below):

// If comparator(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
// If comparator(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
// If comparator(a, b) is greater than 0, sort b to a lower index than a.

// If no comparator is given, just sort the elements using < or >.
function insertionSort (array) {

  for (var i = 1; i<array.length; i++) {
    var j = i;
    while (j>0 && array[j].value < array[j-1].value) {
      swap(array, j-1, j);
      j -= 1;
    }
  }
  return array;
}
function swap (array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.
function characterFrequency (string) {
  var strObj = {};
  var result = [];
  string.split("").forEach(function(char){
    if (!strObj[char]) {
      strObj[char] = 1;
    } else {
      strObj[char]+=1;
    }
  });
  for (var key in strObj) {
    result.push([key, strObj[key]]);
  }
  result.sort(function(a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
  });
  return result;
}

// Tree Mapping
// Implement a map method on this Tree class.

// Map accepts a mapping function as its only argument. It traverses the tree, passing each node’s value into the mapping function, and generates a new tree containing the results.

// So map should return a tree with the same structure, and different values, but it should NOT modify the tree that was passed in.

/*
 * Basic tree that stores a value.
*/
var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  // TODO: return a new tree with the same structure as `this`,
  //       with values generated by the callback
  var newTree = new Tree(callback(this.value));
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      newTree.children.push(this.children[i].map(callback));
    }
  }
  return newTree;
};

/**
 * You shouldn't need to change anything below here,
 * but feel free to read it.
 */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
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
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

function sumArray (array) {

  var maxSum = Number.NEGATIVE_INFINITY;
  var currSum = 0;
  var preSum = 0;
  for (var i = 0; i < array.length; i++) {
    preSum = currSum;
    currSum = preSum + array[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0 && currSum<preSum) {
      currSum = 0;
    }
  }
  return maxSum;
}

// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

function telephoneWords (digitString) {

  var keypadObj = {
    "0" : "0",
    "1" : "1",
    "2" : "ABC",
    "3" : "DEF",
    "4" : "GHI",
    "5" : "JKL",
    "6" : "MNO",
    "7" : "PQRS",
    "8" : "TUV",
    "9" : "WXYZ",
  }
  var result = [];
  var temp = [];
  function findSolution(digitString, keypadObj, result, temp) {
    if (digitString.length === 0) {
      var resultArr = [];
      for (var i = 0; i < temp.length; i++) {
        resultArr[i] = temp[i];
      }
      result.push(resultArr.join(""));
      return;
    }

    var currStr = keypadObj[digitString.substring(0,1)];
    for (var j = 0; j < currStr.length; j++) {
      temp.push(currStr.charAt(j));
      findSolution(digitString.substring(1), keypadObj, result, temp);
      temp.pop();
    }

  }

  findSolution(digitString, keypadObj, result, temp)
  return result;

}

// Function Bind
// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

// For example, if we have the following object:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert('here comes' + ' ' + this.name);
//   }
// };

// alice.shout() //=> 'here comes alice'
// If you use your bind function with the context { name: 'bob' }, as is shown here:

// boundShout = bind(alice.shout, { name: 'bob' })
// Then calling boundShout() will alert 'here comes bob'

// The following example should also work in the following way once your function is implemented:

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'diet');

// boundFunc('coke'); //=> 'dietcoke'
// Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert(this.name);
//   }
// };

// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'

// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'
// DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().

var bind = function(func, context){
  //Your code here
  var args = Array.prototype.slice.call(arguments, 2);
  return function(){
    //Your code here
    var newArgs = args.concat([...arguments]);
    var result = func.apply(context, newArgs);
    return result;
  }
};

Function.prototype.bind = function(context) {
  //Your code here
  var that = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    //Your code here
    var newArgs = args.concat([...arguments]);
    var result = that.apply(context, newArgs);
    return result;
  }
};

// Coin Sums
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p
// In other words, find all the possible combinations of coins that sum to a given pence value.

function coinSums (total) {

  var count = 0;
  function findSolution(reminder, index) {
    var currCoin = coins[index];
    if (index === 0) {
      if (reminder%currCoin === 0) {
        count+=1;
        return;
      }
    }
    while (reminder >= 0) {
      findSolution(reminder, index-1);
      reminder -= currCoin;
    }
  }
  findSolution(total, coins.length-1);
  return count;
}

// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
function arrayception (array, currCount, maxCount) {

  var currCount = currCount || 0;
  var maxCount = maxCount || 0;
  array.forEach(function(item) {
    if (Array.isArray(item)) {
      maxCount = arrayception(item, currCount+1, maxCount);
    } else {
      currCount += 1;
      maxCount = Math.max(maxCount, currCount);
      currCount -= 1;
    }
  });
  return maxCount;
}

// Eventing Library
// Make an eventing system mix-in that adds .trigger() and .on() to any input object.

// Example usage:
// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function(){ // On takes an event name and a callback function
//   console.log('Age changed');
// });
// obj.age++;
// obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
// Caveats:
// - mixEvents should return the original object it was passed after extending it.
// - If we repeatedly call .on with the same event name, it should
// continue to call the old function as well. That is to say, we can have multiple
// listeners for an event.
// - If obj.trigger is called with additional arguments, pass those to the
// listeners.
// - It is not necessary to write a way to remove listeners.

var mixEvents = function(obj) {
  //Your code here
  var events = {};

  obj.trigger = function (event) {
    //Your code here
    if (events[event]) {
      var args = Array.prototype.slice.call(arguments, 1);
      events[event].forEach(function(callback){
        callback.apply(obj, args);
      });
    }

  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //Your code here
    if (events[event] === undefined) {
      events[event] = [];
    }
    events[event].push(callback)
  };
  return obj;
};

// Hash Table Resizing
// Define a resize function in the following hash table implementation.
var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;
//***Finish This Function***//

  function resize(newSize){
     //Your code here
     resizing = true;
     var oldStorage = storage;
     storageLimit = newSize;
     storage = [];
     size = 0;
     oldStorage.forEach(function(bucket) {
       if (!bucket) {
         return;
       } else {
          bucket.forEach(function(tuple){
            result.insert(tuple[0], tuple[1]);
          })
       }
     })
     resizing = false;
  }

//*************************//

  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };

  //This next function you would never have for a hash table
  //It is here merely for testing purposes. So we can check that
  //you are resizing correctly
  result.find = function(index){
    //return the bucket at a given index
    return storage[index];
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// Linked List Cycles
// Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

// Explanation:

// Generally, we assume that a linked list will terminate in a null next pointer, as follows:

//  A -> B -> C -> D -> E -> null
// A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

// This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

//  A -> B -> C
//       ^    |
//       |    v
//       E <- D
// 'Constraint 1: Do this in linear time'

// 'Constraint 2: Do this in constant space'

// 'Constraint 3: Do not mutate the original nodes in any way'

var hasCycle = function(linkedList){
  var ahead = linkedList;
  var behind = linkedList;
  var move = false;
  while (ahead = ahead.next) {
    if (ahead === behind) {
      return true;
    }
    if (move) {
      behind = behind.next;
    }
    move = !move;
  }
  return false
};

// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

function allAnagrams (string) {

  var results = {};
  function findSolution(str, options) {
    if (str.length === string.length) {
      results[str] = true;
      return;
    }
    for (var i = 0; i < options.length; i++) {
      findSolution(str+options[i], options.slice(0, i)+options.slice(i+1));
    }
  }
  findSolution('', string);
  return Object.keys(results);
}

// Words within Words
// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.
function nestedWordCount (wordList) {

  var listObj = {};
  // var listArr = [];
  var result = "";
  var max = 0;

  wordList.forEach(function(target) {
    var count = 0;
    wordList.forEach(function(word) {
      if (target.toLowerCase().includes(word.toLowerCase())) {
        // if (listObj[target] === undefined) {
        //   listObj[target] = 0;
        // }
        // listObj[target] += 1;
        count+=1;
      }
    })
    if (count>max) {
      max = count;
      result = target;
    }
  })

  // for (var key in listObj) {
  //   if (listObj[key]>max) {
  //     max = listObj[key];
  //     result = key;
  //   }
  // }
  return result;
}

// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

function longestPalindrome (string) {

  var maxPalindrome = "";
  function isPalindrome (left, right) {
    while(left>=0 && right<string.length && string[left] === string[right]) {
      left -= 1;
      right += 1;
    }
  return string.slice(left+1, right);
  }

  for (var i = 0; i < string.length; i++) {
    var oddPalindrome = isPalindrome(i-1, i+1);
    var evenPalindrome = isPalindrome(i, i+1);

    if (oddPalindrome.length > maxPalindrome.length) {
      maxPalindrome = oddPalindrome;
    }
    if (evenPalindrome.length > maxPalindrome.length) {
      maxPalindrome = evenPalindrome;
    }
  }
  return maxPalindrome;
}

// Only Unique
// Given a string, remove any characters that are not unique from the string.

function onlyUnique (str) {

  var strObj = {};
  var strArr = str.split("");
  strArr.forEach(function(char) {
    if (strObj[char] === undefined) {
      strObj[char] = 0;
    }
    strObj[char] += 1;
  });
  for (var i = 0; i < str.length; i++) {
    if (strObj[str[i]] > 1) {
      strArr.forEach(function(item, index) {
        if (item === str[i]) {
          strArr.splice(index, 1);
        }
      })
    }
  }
  return strArr.join("");

}
