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
        var currentHead;
        this.push = function(value) {
            storage[length++] = value;
        }
        this.pop = function() {
            delete storage[length--];
            currentHead = storage[length];
        }
        this.size = function() {
            return length;
        }
        this.returnHead = function() {
            return currentHead;
        }
    }

    var Queue = function() {
        var in = new Stack();
        var out = new Stack();
        this.enqueue = function(value) {
            in.push(value);
        }
        this.dequeue = function() {
            if (out.size() === 0) {
                while (in.size() !== 0) {
                    var temp = in.pop();
                    out.push(temp);
                }
            }
            out.pop();
        }
    }
    for (var i = 1; i < inputs.length; i++) {
        if (inputs[i] === '2') {
            queue.dequeue();
        } else if (inputs[i] === '3') {
            console.log(stack1[0]);
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