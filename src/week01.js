function nestedWordCount (wordList) {
  // Write your code here, and
  // return your final answer.
  var listObj = {};
  var listArr = [];

  wordList.forEach(function(target, index) {
    var copy = wordList.slice();
    copy.splice(index, 1);
    console.log(copy);
    copy.forEach(function(word) {
      if (word.includes(target)) {
        if (listObj[word] === undefined) {
          listObj[word] = 1;
        }
        listObj[word] += 1;
      }
    })
  })
  for (var key in listObj) {
    listArr.push([key, listObj[key]]);
  }
  listArr.sort(function(a, b) {
    return b[1] - a[1];
  });
  return listArr[0][0];
}

function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
  var strObj = {};
  var strArr = str.split("");
  strArr.forEach(function(char) {
    if (strObj[char] === undefined) {
      strObj[char] = 0;
    }
    strObj[char] += 1;
  });
  console.log(strObj);
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

function getPonyAllergies (ponies, ownerEmail) {
  // Write your code here, and
  // return your final answer.
  return ponies.filter(function(obj) {
    return getProp("email")(obj) === ownerEmail;
  }).map(function(obj) {
    return obj["allergies"];
  }).concatAll().sort().reduce(function(accu, curr) {
    if (accu.includes(curr)) {
      return accu;
    }
    accu.push(curr);
    return accu;
  },[]);
}

function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  var result = [];
  var dir = top = left = 0;
  var bottom = matrix.length - 1;
  var right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (var i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
      dir = 1;
    } else if (dir === 1) {
      for (var i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      dir = 2;
    } else if (dir === 2) {
      for (var i = right; i >= left; i-- ) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      dir = 3;
    } else if (dir === 3) {
      for (var i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
      dir = 0;
    }
  }
  return result;
}

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(){
  // TODO: implement me!
  path1 = this.getAncestorPath(arguments[0]);
  path2 = this.getAncestorPath(arguments[1]);
  if (path1===null || path2===null) {
    return null
  }
  for (var i = Math.min(path1.length-1, path2.length-1); i >= 0; i--) {
    if (path2.includes(path1[i])) {
      return path1[i];
    }
  }
}

Tree.prototype.getAncestorPath = function(target){
  // TODO: implement me!
  if (this === target) {
    return [this];
  }
  for (var i = 0; i < this.children.length; i++) {
    var path = this.children[i].getAncestorPath(target);
    if (path) {
      return [this].concat(path);
    }
  }
  // var result = [];
  // function findSolution(tree) {
  //   if (tree === target) {
  //     result.push(tree);
  //     return;
  //   }

  //   for (var i = 0; i < tree.children.length; i++) {
  //     if (tree.children[i].isDescendant(target)) {
  //       result.push(tree.children[i]);
  //       findSolution(tree.children[i])
  //     }
  //   }
  // }
  // findSolution(this);
  // return result;
  return null;
}

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