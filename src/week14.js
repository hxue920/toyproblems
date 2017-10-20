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
    for (var i = a[a.length-1]; i<=b[0]; i++) {
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
    var max = min = s[0];
    var countMax = countMin = 0;
    for (var i = 1; i <= s.length; i++) {
        if (s[i] > max) {
            max = s[i];
            countMax += 1;
        }
        if (s[i] < min) {
            min = s[i];
            countMin += 1;
        }
    }
    return [countMax, countMin];
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}

//Birthday Chocolate
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

function solve(n, s, d, m){
    var count = 0;
    if (n === m) {
        if (s[0] === d) {
            return 1;
        }
    }
    for (var i = 0; i<=n-m; i++) {
        var total = 0;
        for (var j = i; j <= i+m-1; j++) {
            total += s[j];
        }
        if (total === d) {
            count += 1;
        }
    }
    return count;

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}

//Divisible Sum Pairs
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

function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (var i = 0; i <= ar.length-2; i++) {
        for (var j = i+1; j <= ar.length-1; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count += 1;
            }
        }
    }
    return count;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    process.stdout.write("" + result + "\n");

}

//Migratory Birds
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

function migratoryBirds(n, ar) {
    var obj = {};
    var max = 0;
    var result = 0;
    ar.sort().forEach(function(ele) {
        if (!obj[ele]) {
            obj[ele] = 0;
        }
        obj[ele] += 1;
    });
    for (var key in obj) {
        if(obj[key] > max) {
            max = obj[key];
            result = parseInt(key);
        }
    }
    return result;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}

//Day of the Programmer
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

function solve(year){
    if (year === 1918) {
        return '26.09.1918';
    }
    if ((year < 1918 && year % 4 === 0) || year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ) {
        return '12.09.'+ year;
    } else {
        return '13.09.'+ year;
    }

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}

//two sum
var twoSum = function(nums, target) {
    for (var i = 0; i<nums.length; i++) {
        var tempIdx = nums.indexOf(target-nums[i]);
        if (tempIdx !== -1 && tempIdx !== i) {
            return [i, tempIdx];
        }
    }
};

//Bon Appétit
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

function bonAppetit(n, k, b, ar) {
    var total = ar.reduce(function(pre, curr) {
        return pre + curr;
    });
    var share = (total - ar[k]) / 2;
    if ( share === b) {
        return 'Bon Appetit';
    } else {
        return b - share;
    }
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, b, ar);
    process.stdout.write("" + result + "\n");

}

//Sock Merchant
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

function sockMerchant(n, ar) {
    var count = 0;
    var obj = {};
    ar.forEach(function(ele) {
        if (!obj[ele]) {
            obj[ele] = true;
        } else {
            count += 1;
            delete obj[ele];
        }
    });
    return count;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}

//Drawing Book
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

function solve(n, p){
    var total = Math.ceil((n+1) / 2);
    var page = Math.ceil((p+1) / 2);
    return total - page >= page ? page - 1: total - page;
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}

//Counting Valleys
function processData(input) {
    var ar = input.split("\n")[1].split("");
    var count = slope = 0;
    var valley = false;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] === 'U') {
            slope += 1;
        } else {
            slope -= 1;
        }
        if (slope < 0 && !valley) {
            valley = true;
        }
        if (slope === 0 && valley) {

            count += 1;
            valley = false;
        }
    }
    console.log(count);
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

//Electronics Shop
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

function getMoneySpent(keyboards, drives, s){
    var max = 0;
    for (var i = 0; i < keyboards.length; i++) {
        for (var j = 0; j < drives.length; j++) {
            var total = keyboards[i] + drives[j];
            if (total > max && total <= s) {
                max = total;
            }
        }
    }
    return max > 0 ? max : -1;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    drives = readLine().split(' ');
    drives = drives.map(Number);
    //  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    var moneySpent = getMoneySpent(keyboards, drives, s);
    process.stdout.write(""+moneySpent+"\n");

}

//Cats and a Mouse
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
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var disX = Math.abs(x-z);
        var disY = Math.abs(y-z);
        if (disX > disY) {
            console.log("Cat B");
        } else if (disX < disY) {
            console.log("Cat A");
        } else {
            console.log("Mouse C");
        }
    }

}

//Forming a Magic Square
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
    var s = [];
    for(s_i = 0; s_i < 3; s_i++){
       s[s_i] = readLine().split(' ');
       s[s_i] = s[s_i].map(Number);
    }
    var squares = [
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
            ];
    function flatten(array) {
        var result = [];
        for (var i = 0; i<array.length; i++) {
            result = result.concat(array[i]);
        }
        return result;
    }
    var min;
    var sFlat = flatten(s);
    for (var i = 0; i < squares.length; i++) {
        var temp = flatten(squares[i]);
        var diff = 0;
        for (var j = 0; j < temp.length; j++) {
            diff += Math.abs(sFlat[j] - temp[j]);
        }
        if (min === undefined) {
            min = diff;
         } else if (min > diff) {
             min = diff;
         }
    }
    console.log(min);

}

//Picking Numbers
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
    var sorted = a.sort();
    var result = 0;
    for (var i = 0; i < sorted.length-1; i++) {
        var max = 1;
        for (var j = i+1; j < sorted.length; j++) {
            if (Math.abs(sorted[i] - sorted[j]) <= 1) {
                max+=1;
            } else {
                break;
            }
        }
        if (max > result) {
            result = max;
        }
    }
    console.log(result);

}

//Climbing the Leaderboard
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
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    var lastIndex = scores.length;
    for (var j = 0; j < alice.length; j++) {
        var rank = 0;
        for (var i = 0; i < lastIndex; i++) {
            if (scores[i] <= alice[j]) {
                lastIndex = i;
                break;
            } else if (scores[i] < scores[i-1] || scores[i-1] === undefined) {
                rank += 1;
            }
        }
        console.log(rank+1);
    }

}


function findMax(array) {
    var min = array[0];
    var maxDiff = array[1] - array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] - min > maxDiff) {
            maxDiff = array[i] - min;
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return maxDiff
}

//The Hurdle Race
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
    var k = parseInt(n_temp[1]);
    height = readLine().split(' ');
    height = height.map(Number);
    var max = Math.max.apply(null, height);
    if (max < k) {
        console.log(0);
    } else {
        console.log(max - k);
    }
}

//Designer PDF Viewer
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
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var max = 0;
    for (var i = 0; i<word.length; i++) {
        var temp = h[word.charCodeAt(i)-97];
        if (temp > max) {
            max = temp;
        }
    }
    console.log(word.length*max);

}

//Clone Graph
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph, node) {
    var copy = {};
    var queue = [node];

    while (queue.length > 0) {
        var currNode = queue.shift();
        copy[currNode.label] = new UndirectedGraphNode(currNode.label);

        for (var i = 0; i < currNode.neighbors.length; i++) {
            if (!copy[currNode.neighbors[i].label]) {
                queue.push(currNode.neighbors[i]);
            }
            var neighbor = new UndirectedGraphNode(currNode.neighbors[i].label)
            copy[currNode.label].neighbors.push(neighbor);
        }
    }
    return copy[currNode.label];


};

//Course Schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = {};
    var visited = {};
    var path = {};
    for (var i = 0; i < numCourses; i++) {
        graph[i] = {index: i, children: []};
    }
    for (var j = 0; j < prerequisites.length; j++) {
        graph[prerequisites[i][1]].children.push(graph[prerequisites[i][0]]);
    }

    for (var k = 0; k < numCourses; k++) {
        if (!visited[k]) {
            if (!dfs(graph[k])) {
                return false;
            }
        }
    }
    return true;

    function dfs(node) {
        visited[node.index] = true;
        path[node.index] = true;
        if (node.children.length > 0) {
            for (var i = 0; i < node.children.length; i++) {
                if (path[node.children[i].index]) {
                    return false;
                }
                if (dfs(graph[node.children[i].index])) {
                    return false;
                }
            }
        }
        path[node.index] = false;
        return true;
    }
};

//Utopian Tree
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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        if (n === 0) {
            console.log(1);
            continue;
        }
        var height = 1;
        for (var i = 1; i<=n; i++) {
            if (i%2===0) {
                height+=1;
            } else {
                height*=2;
            }
        }
        console.log(height);
    }

}

//Angry Professor
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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        var students = a.filter(function(ele) {
            return ele <= 0;
        });
        if (students.length >= k) {
            console.log("NO");
        } else {
            console.log("YES");
        }
    }

}

//beautiful days at the movies
function processData(input) {
    var ar = input.split(" ");
    var k = ar[2];
    var count = 0;
    for (var i = parseInt(ar[0]); i <= parseInt(ar[1]); i++) {
        var reverse = (i + '').split('').reverse().join('');
        if (Math.abs(i - reverse) % k === 0) count += 1;
    }
    console.log(count);
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

//Viral Advertising
function processData(input) {
    var shares = 2;
    var total = 2
    for (var i = 1; i < input; i++) {
        shares = Math.floor(shares * 3 / 2);
        total += shares;
    }
    console.log(total);
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