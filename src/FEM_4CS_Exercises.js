//Bloom Filters
// here are your hashing functions. it's not essential you know how they work
// a library called xxhashjs is being loaded (as XXH) and we're using three different
// instances of that as your hashing functions
const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

// fill out these two methods
// `add` adds a string to the bloom filter and returns void (nothing, undefined)
// `contains` takes a string and tells you if a string is maybe in the bloom filter
class BloomFilter {
  // you'll probably need some instance variables
  storage = new Array(100)
    
  add (string) {
    // code here
    const result = [h1(string), h2(string), h3(string)];
    result.forEach(num => {
      this.storage[num] = 1;
    })
  }
  contains (string) {
    const result = [h1(string), h2(string), h3(string)];
    for (let i = 0; i < result.length; i++) {
      if (!this.storage[result[i]]) {
        return false;
      }
    }
    return true;
  }
};

// unit tests
// do not modify the below code
describe('BloomFilter', function() {
  let bf;
  beforeEach(() => {
    bf = new BloomFilter;
  })
  it('returns false when empty', () => {
    expect(bf.contains("Brian")).toBe(false);
    expect(bf.contains("Sarah")).toBe(false);
    expect(bf.contains("Simona")).toBe(false);
  });
  it('handles one item', () => {
    expect(bf.contains("Brian")).toBe(false);
    bf.add("Brian");
    expect(bf.contains("Brian")).toBe(true);
    expect(bf.contains("Sarah")).toBe(false);
    expect(bf.contains("Simona")).toBe(false);
  });
  it('handles many items', () => {
    const names = ["Brian", "Simona", "Sarah", "Asim", "John", "Sean", "Jessie", "Paige", "Ashley"];
    names.forEach((item) => bf.add(item));
    names.forEach((item) => expect(bf.contains(item)).toBe(true));
    ["Sam", "Chris", "Taylor", "Florence"].forEach((item) => expect(bf.contains(item)).toBe(false));
  });
});


//Tree Depth-first Traversal
const preorderTraverse = (node, array) => {
  // fill this out
  if (!node) return;
  array.push(node.value);
  preorderTraverse(node.left, array);
  preorderTraverse(node.right, array);
  return array;
};

const inorderTraverse = (node, array) => {
  // fill this out
  if (!node) return;
  inorderTraverse(node.left, array);
  array.push(node.value);
  inorderTraverse(node.right, array);
  return array;
};

const postorderTraverse = (node, array) => {
  // fill this out
  if (!node) return;
  postorderTraverse(node.left, array);
  postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};


// unit tests
// do not modify the below code
describe('tests', function() {
  
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };
  
  it('preorderTraverse', () => {
    expect(preorderTraverse(tree, [])).toEqual([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
  });
  
  it('inorderTraverse', () => {
    expect(inorderTraverse(tree, [])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  
  it('postorderTraverse', () => {
    expect(postorderTraverse(tree, [])).toEqual([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
  });
});

//Breadth-first Traverse
const breadthFirstTraverse = (queue, array) => {
  // iterative solution
  // while (queue.length) {
  //   const node = queue.shift();
  //   array.push(node.value);
  //   if (node.left) {
  //     queue.push(node.left);
  //   }
  //   if (node.right) {
  //     queue.push(node.right);
  //   }
  // }
  // return array;
  
  //recursive solution
  if (!queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) {
     queue.push(node.left);
  }
  if (node.right) {
     queue.push(node.right);
  }
  array = breadthFirstTraverse(queue, array);
  return array;
}


// unit tests
// do not modify the below code
describe('tests', function() {
  const answer = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
  
  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };
  
  render(tree, answer);
  
  it('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});

// Pathfinding
// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const visited = maze.map((row, y) => 
    row.map((val, x) => ({
      isClosed: val === 1,
      length: 0,
      openBy: NO_ONE,
      x,
      y
    }))
  );
  visited[yA][xA].openBy = BY_A;
  visited[yB][xB].openBy = BY_B;
  
  let queueA = [visited[yA][xA]];
  let queueB = [visited[yB][xB]];
  let distance = 0;
  
  while (queueA.length && queueB.length) {
    distance += 1;
    const neighborsA = queueA.reduce((acc, curr) => acc.concat(getNeighbors(curr.x, curr.y, visited)), []);
    queueA = [];
    for (let i = 0; i < neighborsA.length; i++) {
      const neighbor = neighborsA[i];
      if (neighbor.openBy === BY_B) {
        return distance + neighbor.length;
      } else if (neighbor.openBy === NO_ONE) {
        neighbor.openBy = BY_A;
        neighbor.length = distance;
        queueA.push(neighbor);
      }
    }
    
    const neighborsB = queueB.reduce((acc, curr) => acc.concat(getNeighbors(curr.x, curr.y, visited)), []);
    queueB = [];
    for (let j = 0; j<neighborsB.length; j++) {
      const neighbor = neighborsB[j];
      if (neighbor.openBy === BY_A) {
        return distance + neighbor.length;
      } else if (neighbor.openBy === NO_ONE) {
        neighbor.openBy = BY_B;
        neighbor.length = distance;
        queueB.push(neighbor);
      }
    }
  }
  return -1;
};

const getNeighbors = (x, y, visited) => {
  const neighbors = [];
  if (x-1 >= 0 && !visited[y][x-1].isClosed) {
    neighbors.push(visited[y][x-1]);
  }
  if (x+1 < visited.length && !visited[y][x+1].isClosed) {
    neighbors.push(visited[y][x+1]);
  }
  if (y-1 >= 0 && !visited[y-1][x].isClosed) {
    neighbors.push(visited[y-1][x]);
  }
  if (y+1 < visited[0].length && !visited[y+1][x].isClosed) {
    neighbors.push(visited[y+1][x]);
  }
  return neighbors;
}

// there is a visualization tool in the completed exercise
// it requires you to shape your objects like I did
// see the notes there if you want to use it

// unit tests
// do not modify the below code
describe("pathfinding – happy path", function() {
  const fourByFour = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2]
  ]
  it("should solve a 4x4 maze", () => {
    expect(findShortestPathLength(fourByFour, [0, 0], [3, 3])).toEqual(6);
  });

  
  const sixBySix = [
    [0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0]
  ];
  it("should solve a 6x6 maze", () => {
    expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
  });

  const eightByEight = [
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2]
  ];
  it("should solve a 8x8 maze", () => {
    expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
  });

  const fifteenByFifteen = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0,],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0,],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,],
    [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0,],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0,],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,],
    [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  ]
  it("should solve a 15x15 maze", () => {
    expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(78);
  });
});

// I care far less if you solve these
// nonetheless, if you're having, solve some of the edge cases too!
// just remove the x from xdescribe
describe("pathfinding – edge cases", function() {
  const byEachOther = [
    [0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  it("should solve the maze if they're next to each other", () => {
    expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
  });

  const impossible = [
    [0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 2],
  ];
  it("should return -1 when there's no possible path", () => {
    expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toEqual(-1);
  });
});


//Graph Traversal
// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count initial id's own job title in the total

/*
 * parameters:
 * myId                - number    - the id of the user who is the root node
 * getUser             - function - a function that returns a user's object given an ID
 *                       user object: {id: number, title: string, connections: Array<number>}
 * degreesOfSeparation - number   - how many degrees of separation away to look on the graph
 */
const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
  const visited = new Set();
  const titles = {};
  let freqTitle = "";
  let maxFreq = 0;
  let queue = [myId];
  for (let i = 0; i<= degreesOfSeparation; i++) {
    let connections = [];
    //queue = queue.filter((id) => visited.has(id) !== true);
    for (let id of queue) {     
      if (!visited.has(id)) {
        let user = getUser(id);
        titles[user.title] = titles[user.title] ? titles[user.title] + 1 : 1;
        connections = connections.concat(user.connections);
        visited.add(user.id);
      } else {
        continue;
      }
    }
    queue = connections;
    console.log('QUEUES: ', queue);
  }
  console.log(titles);
  for (let key in titles) {
    if (titles[key] > maxFreq) {
      freqTitle = key;
      maxFreq = titles[key];
    }
  }
  return freqTitle;
};

// unit tests
// do not modify the below code
describe("findMostCommonTitle", function() {
  // the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
  // I recommend finishing these one at a time. if you put an x in front of the it so the function call is
  // xit it will not run
  it("user 30 with 2 degrees of separation", () => {
    expect(findMostCommonTitle(30, getUser, 2)).toBe("Librarian");
  });

  it("user 11 with 3 degrees of separation", () => {
    expect(findMostCommonTitle(11, getUser, 3)).toBe("Graphic Designer");
  });

  it("user 306 with 4 degrees of separation", () => {
    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    expect(findMostCommonTitle(306, getUser, 4)).toBe("Clinical Specialist"); // Or Pharmacist
  });
});

// remove x from describe to run
describe("extra credit", function() {
  it("user 1 with 7 degrees of separation – this will traverse every user that's followed by someone else. five users are unfollowed", () => {
    expect(findMostCommonTitle(1, getUser, 7)).toBe("Marketing Manager");
  });
});


//Maze Generation
// create a function that accepts two paraments: an empty maze and a starting coordinate
// the maze will be an array of arrays of objects. the objects will look like:
// {
//   "n": true,
//   "e": true,
//   "s": true,
//   "w": true,
//   "visited": false
// }
// 
// the outer array (that contains arrays) represents the y axis. the inner arrays (that contains
// objects) are represent the x axis. maze[y][x]
//
// the starting coordinates will be a pair, an array of two numbers, [x, y]. the first
// number will be the x position and the second will be the y position
//
// generateMaze will return the same maze (you can operate on the parameter itself)
//
// a function called randomizeDirection is globally available. it will return to you an array of
// ['n', 'e', 's', 'w'] in random order. in order to be able unit test this, these return values
// are pre-determined. if you want to have a truly random return, call setOrder(null) (another
// globally available function.) if you call it too frequently to pass the unit test, you'll see an
// error in the console.
//
// it will also attempt to draw your maze as you write your algorithm. you'll see two lines for each
// cell since neighbors each has its own walls. writeMaze assumes your data is well formatted . if you
// have unvisted cells, they'll be highlighted in red
//
// if you'd like to see the utlities functions, they're kept in this CodePen: 
// https://codepen.io/btholt/pen/bLEryO?editors=0010
//
// I highly suggest you work on one unit test at a time. Mark the others `xit('...', () => ...)` instead of
// `it('...', () => ...)` so they won't run.


const generateMaze = (maze, [xStart, yStart]) => {
  processNode(maze, xStart, yStart);
  return maze;
};

const processNode = (maze, x, y) => {
  const node = maze[y][x];
  node.visited = true;
  randomizeDirection().forEach((direction) => {
    const [xMod, yMod] = getMod(direction);
    if (maze[y+yMod] && maze[y+yMod][x+xMod] && !maze[y+yMod][x+xMod].visited) {
      node[direction] = false;
      maze[y+yMod][x+xMod][getOppositeWall(direction)] = false;
      processNode(maze, x+xMod, y+yMod);
    }
  })
}
const getMod = (direction) => {
  return direction === 'n' ? [0, 1] : direction === 's' ? [0, -1] : direction === 'w' ? [-1, 0] : [1, 0];
}
const getOppositeWall = (direction) => {
  return direction === 'n' ? 's' : direction === 's' ? 'n' : direction === 'w' ? 'e' : 'w'; 
}
// unit tests
// do not modify the below code
describe("mazes", function() {
  beforeEach(() => {});
  it("5x5", () => {
    setOrder(1);
    const maze = generateMaze(genEmptyMaze(5, 5), [0, 0]);
    writeMaze(maze, document.getElementById("maze-1"));
    expect(maze).toEqual([
      [
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true }
      ]
    ]);
  });

  it("8x8", () => {
    setOrder(2);
    const maze = generateMaze(genEmptyMaze(8, 8), [5, 3]);
    writeMaze(maze, document.getElementById("maze-2"));
    expect(maze).toEqual([
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ]
    ]);
  });

  it("15x15", () => {
    setOrder(3);
    const maze = generateMaze(genEmptyMaze(15, 15), [10, 2]);
    writeMaze(maze, document.getElementById("maze-3"));
    expect(maze).toEqual([
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ]
    ]);
  });
});

//Tries
// in order to pass the unit tests, you will need to create a function called createTrie that accepts a list of strings
// as a parameter and returns an object with a method on it called "`complete`. complete is a method that when called
// with a string will return an array of up to length three that are autocompleted suggestions of how to finish that string.
// for the sake of this exercise, it does not matter which order these strings are returned in or if there are more than three
// possible suggestions, which three you choose
//
// feel free to see the dataset here:  https://codepen.io/btholt/pen/jZMdmp
//
// I suggest working on one unit test at a time, use `xit` instead of `it` to not run unit tests
// the edge cases are for fun and for this exercise you don't necessarily need to pass them

class Node {
  // you don't have to use this data structure, this is just how I did it
  // you'll almost definitely need more methods than this and a constructor
  // and instance variables
  children = [];
  isEnd = false;
  value = '';
  constructor(string) {
    this.value = string[0] || '';
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)));
    } else {
      this.isEnd = true;
    }
  }
  add(string) {
    const firstLetter = string[0];
    const rest = string.substr(1);
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === firstLetter) {
        if (rest) {
          child.add(rest);
        } else {
          child.isEnd = true;
        }        
        return;
      }
    }
    this.children.push(new Node(string));
  }
  complete(string) {
    
    return [];
  }
}

const createTrie = words => {
  // you do not have to do it this way; this is just how I did it
  const root = new Node("");
  
  // more code should go here
  
  return root;
};

// unit tests
// do not modify the below code
describe("tries", function() {
  it("dataset of 10 – san", () => {
    const root = createTrie(CITY_NAMES.slice(0, 10));
    const completions = root.complete("san");
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ["san antonio", "san diego", "san jose"])
        .length
    ).toBe(3);
  });

  it("dataset of 10 – philadelph", () => {
    const root = createTrie(CITY_NAMES.slice(0, 10));
    const completions = root.complete("philadelph");
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ["philadelphia"]).length).toBe(1);
  });

  it("dataset of 25 – d", () => {
    const root = createTrie(CITY_NAMES.slice(0, 25));
    const completions = root.complete("d");
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ["dallas", "detroit", "denver"]).length
    ).toBe(3);
  });

  it("dataset of 200 – new", () => {
    const root = createTrie(CITY_NAMES.slice(0, 200));
    const completions = root.complete("new");
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, [
        "new york",
        "new orleans",
        "new haven",
        "newark",
        "newport news"
      ]).length
    ).toBe(3);
  });

  it("dataset of 200 – bo", () => {
    const root = createTrie(CITY_NAMES.slice(0, 200));
    const completions = root.complete("bo");
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ["boston", "boise city"]).length).toBe(
      2
    );
  });

  it("dataset of 500 – sal", () => {
    const root = createTrie(CITY_NAMES.slice(0, 500));
    const completions = root.complete("sal");
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, ["salt lake city", "salem", "salinas"]).length
    ).toBe(3);
  });

  it("dataset of 925 – san", () => {
    const root = createTrie(CITY_NAMES);
    const completions = root.complete("san");
    expect(completions.length).toBe(3);
    expect(
      _.intersection(completions, [
        "san antonio",
        "san angelo",
        "san diego",
        "san jose",
        "san jacinto",
        "san francisco",
        "san bernardino",
        "san buenaventura",
        "san bruno",
        "san mateo",
        "san marcos",
        "san leandro",
        "san luis obispo",
        "san ramon",
        "san rafael",
        "san clemente",
        "san gabriel",
        "santa ana",
        "santa clarita",
        "santa clara",
        "santa cruz",
        "santa rosa",
        "santa maria",
        "santa monica",
        "santa barbara",
        "santa fe",
        "santee",
        "sandy",
        "sandy springs",
        "sanford"
      ]).length
    ).toBe(3);
  });
});

xdescribe("edge cases", () => {
  it("handle whole words – seattle", () => {
    const root = createTrie(CITY_NAMES.slice(0, 30));
    const completions = root.complete("seattle");
    expect(completions.length).toBe(1);
    expect(_.intersection(completions, ["seattle"]).length).toBe(1);
  });

  it("handle no match", () => {
    const root = createTrie(CITY_NAMES.slice(0, 30));
    const completions = root.complete("no match");
    expect(completions.length).toBe(0);
  });

  it("handle words that are a subset of another string – salin", () => {
    const root = createTrie(CITY_NAMES.slice(0, 800));
    const completions = root.complete("salin");
    expect(completions.length).toBe(2);
    expect(_.intersection(completions, ["salina", "salinas"]).length).toBe(2);
  });
});
