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