process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function solveMeFirst(a, b) {
  return a + b;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}

//Left Rotate
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    var result = [];
    a.forEach((Number, index) => {
        let newIndex = (index + k) % n;
        result[index] = a[newIndex];
    });
    console.log(result.join(' '));
}

//Making Anagrams
function main() {
    var a = readLine();
    var b = readLine();
    var obj = {};
    var result = 0;
    a.split("").forEach(char => {
        obj[char] === undefined ? obj[char] = 1 : obj[char] += 1;
    })
    b.split("").forEach(char => {
        obj[char] === undefined ? obj[char] = -1 : obj[char] -= 1;
    })
    for (let prop in obj) {
       result += Math.abs(obj[prop]);
    }
    console.log(result);
}

//Ransom Note
function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    for (const word of ransom) {
        let index = magazine.indexOf(word);
        if (index !== -1) {
            magazine[index] = undefined;
        } else {
            console.log("No");
            return;
        }
    }
    console.log('Yes');
}

//Balanced Brackets
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        var result = 'YES';
        for (var bracket of expression) {
            if (bracket === '[' || bracket === '{' || bracket === '(') {
                stack.push(bracket);
            } else if (bracket === ']') {
                var temp = stack.pop();
                if (temp !== '[') {
                    result = 'NO';
                    break;
                }
            } else if (bracket === '}') {
                var temp = stack.pop();
                if (temp !== '{') {
                    result = 'NO';
                    break;
                }
            } else if (bracket === ')') {
                var temp = stack.pop();
                if (temp !== '(') {
                    result = 'NO';
                    break;
                }
            }
        }
        if (stack.length > 0) {
            result = 'NO';
        }
        console.log(result)
    }

}

// Queues: A Tale of Two Stacks
function processData(input) {
    var inputs = input.split('\n');
    var Stack = function() {
        var storage = [];
        var length = 0;

        this.push = function(value) {
            storage[length++] = value;
        }
        this.pop = function() {
            var temp = storage[length];
            delete storage[length--];
            return temp;
        }
        this.size = function() {
            return length;
        }
        this.getTail = function() {
            return storage[length];
        }
        this.getHead = function() {
            return storage[0];
        }
    }

    var Queue = function() {
        var inbox = new Stack();
        var outbox = new Stack();
        this.enqueue = function(value) {
            inbox.push(value);
        }
        this.dequeue = function() {
            if (outbox.size() === 0) {
                while (inbox.size() !== 0) {
                    var temp = inbox.pop();
                    outbox.push(temp);
                }
            }
            outbox.pop();
        }
        this.printHead = function() {
            if (outbox.size() > 0) {
                console.log(outbox.getTail());
            } else {
                console.log(inbox.getHead());
            }
        }
    }
    var queue = new Queue();
    for (var i = 1; i < inputs.length; i++) {
        if (inputs[i] === '2') {
            queue.dequeue();
        } else if (inputs[i] === '3') {
            queue.printHead();
        } else {
            var temp = inputs[i].split(' ');
            queue.enqueue(temp[1]);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

//Bubble Sort
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var swapCount = 0;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length; i++) {
            if(a[i] > a[i+1]) {
                var temp = a[i+1];
                a[i+1] = a[i];
                a[i] = temp;
                swapCount+= 1;
                swapped = true;
            }
        }

    } while(swapped);
    console.log(`Array is sorted in ${swapCount} swaps.
                First Element: ${a[0]}
                Last Element: ${a[a.length-1]}`);
}

//Merge Sort
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function countInversions(arr) {
    var count = 0;
    function mergeSort(arr) {
        if (arr.length < 2) return arr;
        var mid = Math.floor(arr.length/2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid);

        return combine(mergeSort(left), mergeSort(right));
    }
    function combine(left, right) {
        var result = [];
        while(left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());

            } else {
                result.push(right.shift());
                count += left.length;
            }
        }
        while (left.length) {
            result.push(left.shift());
        }
        while (right.length) {
            result.push(right.shift());
        }
        return result;
    }
    mergeSort(arr);
    return count;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = countInversions(arr);
        process.stdout.write("" + result + "\n");
    }

}

//DFS: Connected Cell in a Grid
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var m = parseInt(readLine());
    var grid = [];
    for(grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split(' ');
       grid[grid_i] = grid[grid_i].map(Number);
    }

    var count = 0;
    var max = 0;

    function connectedCells() {

        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (isOne(grid[i][j])) {
                    count = 0;
                    zeroCell(grid, i, j);
                    if (count > max) {
                        max = count;
                    }
                }
            }
        }
        console.log(max);
    }

    function isOne(cell) {
        return cell === 1;
    }

    function zeroCell(matrix, i, j) {
        if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[i].length || !isOne(matrix[i][j])) return;
        matrix[i][j] = 0;
        count += 1;
        zeroCell(matrix, i+1, j);
        zeroCell(matrix, i-1, j);
        zeroCell(matrix, i, j+1);
        zeroCell(matrix, i, j-1);
        zeroCell(matrix, i-1, j-1);
        zeroCell(matrix, i-1, j+1);
        zeroCell(matrix, i+1, j-1);
        zeroCell(matrix, i+1, j+1);
    };
    connectedCells();

}

//BFS: Shortest Reach in a Graph
function processData(input) {
    //Enter your code here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

//Time Complexity: Primality
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        isPrime(n);
    }
    function isPrime(num) {
        if (num < 2) {
            console.log('Not prime');
            return;
        }
        for (var i = 2; i <= num/2; i++) {
            if (num % i === 0) {
                console.log("Not prime");
                return;
            }
        }
        console.log("Prime");
    }
}

// Recursion: Fibonacci Numbers
function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//Recursion: Davis' Staircase
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        var answer = countStaircase(n+1);
        console.log(answer);
    }
    function countStaircase(n) {
        if (n <= 1) return n;
        var result = 0;
        for (var i = 1; i<=3 && i<=n; i++) {
            result += countStaircase(n-i);
        }
        return result;
    }
}
// Alternative O(nm) solution for above;
function countStaircase(n) {
    var result = [];
    result[0] = 1;
    result[1] = 1;
    for ( var i=2; i < n; i++) {
        result[i] = 0;
        for (var j=1; j<=3 && j<=i; j++) {
            result[i] += result[i-j];
        }
    }
    return result[n-1];
}

//DP: Coin Change
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    coins = readLine().split(' ');
    coins = coins.map(Number);
    var memo = {};
    function countCoins(coins, amount, coin_index, memo) {
        if (amount === 0) return 1;
        if (coin_index >= coins.length) return 0;
        var key = amount + '-' + coin_index;
        if (memo[key]) return memo[key];
        var currentAmount = 0;
        var result = 0;
        while (currentAmount <= amount) {
            var remainder = amount - currentAmount;
            result += countCoins(coins, remainder, coin_index+1, memo);
            currentAmount += coins[coin_index];
        }
        return result;
    }
    console.log(countCoins(coins, n, 0, memo))
}

//Bit Manipulation: Lonely Integer
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result;
    for (var i = 0; i < a.length; i++) {
        result^=a[i];
    }
    console.log(result);
}

//Grading Students
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(grades){
    return grades.map(function(grade) {
        if (grade < 38 || grade % 5 === 0 || grade % 5 < 3) {
            return grade;
        } else {
            return grade + (5 - grade % 5);
        }
    })
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}

//Apple and Orange
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    var apples = apple.reduce(function(prev, curr) {
        if (curr + a >= s && curr + a <= t) {
            prev += 1;
        }
        return prev;
    }, 0);
    var oranges = orange.reduce(function(prev, curr) {
        if (curr + b >= s && curr + b <= t) {
            prev += 1;
        }
        return prev;
    }, 0);
    console.log(apples);
    console.log(oranges);

}

//Kangaroo
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function kangaroo(x1, v1, x2, v2) {
    if (x1 < x2 && v1 < v2) {
        return "NO";
    } else if (Math.abs(x2 - x1)%Math.abs(v2 - v1) === 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}

//Between Two Sets
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function getTotalX(a, b) {
    var count = 0;
    for (var i = a[length-1]; i<=b[0]; i++) {
        if(a.every(function(ele){return i%ele===0}) && b.every(function(ele){return ele%i===0})) {count += 1};
    }
    return count;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}

//Breaking the Records
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function getRecord(s){
    // Complete this function
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}
