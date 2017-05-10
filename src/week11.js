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

