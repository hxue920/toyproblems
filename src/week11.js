// linear time solution
var findPivot = function (array, start, end) {
  for(var i = 0; i < array.length; i++){
      if (array[i] > array[i+1]) {
        return i+1;
      }
  }
  return null;
};

// recursive log solution, not finished.
var findPivot = function (array, start, end) {
 start = start || 0;
 end = end || array.length - 1;
 var mid = Math.floor((start + end) / 2);
 if () {

 }
 return array[start] < array[end] ? findPivot(array, mid, end) : findPivot(array, start, mid);
};

var waterBlocks = function (blocks) {
  var waterHeights = blocks.map(function(tower, i) {
    var left = Math.max.apply(null, blocks.slice(0, i));
    var right = Math.max.apply(null, blocks.slice(i));
    var waterHeight = Math.min(left, right) - tower;
    return waterHeight;
  });
  waterHeights.shift();
  return waterHeights.reduce(function(pre, curr) {
    return pre + curr;
  }, 0);
};

var MedianStream = function () {
  this._storage = [];
  this._minHeap = [];
  this._maxHeap = [];
  this._compare = function (i, j) { return i < j };
};

MedianStream.prototype = {
  insert: function (value) {
    if(this._storage.length < 2) {
      this._storage.push(value);
      if (this._storage.length === 2) {
        if (this._compare(this._storage[0], this._storage[1])) {
          this._maxHeap.push(this._storage[0]);
          this._minHeap.push(this._storage[1]);
        } else {
          this._maxHeap.push(this._storage[1]);
          this._minHeap.push(this._storage[0]);
        }
      }
    } else {
      if(this._maxHeap[0] < value) {
        this._minHeap.push(value);
        var minChildIndex = this._minHeap.length-1;
        var minParentIndex = Math.floor((minChildIndex-1)/2);
        while (!!this._minHeap[minParentIndex] && this._compare(this._minHeap[minChildIndex], this._minHeap[minParentIndex])) {
          this.swap(minChildIndex, minParentIndex, this._minHeap);
          minChildIndex = minParentIndex;
          minParentIndex = Math.floor((minChildIndex-1)/2);
        }
      } else {
        this._maxHeap.push(value);
        var childIndex = this._maxHeap.length-1;
        var parentIndex = Math.floor((childIndex-1)/2);
        while (!!this._maxHeap[parentIndex] && this._compare(this._maxHeap[parentIndex], this._maxHeap[childIndex])) {
          this.swap(childIndex, parentIndex, this._maxHeap);
          childIndex = parentIndex;
          parentIndex = Math.floor((childIndex-1)/2);
        }
      }
    }

  },
  peekMedian: function () {
    if (this._storage.length < 2) {
      return this._storage[0];
    }
    if (this._maxHeap.length === this._minHeap.length) {
      return (this._maxHeap[0] + this._minHeap[0]) / 2;
    } else {
      return this._maxHeap.length > this._minHeap.length ? this._maxHeap[0] : this._minHeap[0];
    }
  },
  size: function () {return this._minHeap.length + this.maxHeap.length},
  swap: function(childIndex, parentIndex, heap) {
      var temp = this._heap[parentIndex];
      this._heap[parentIndex] = this._heap[childIndex];
      this._heap[childIndex] = temp;
    }
};