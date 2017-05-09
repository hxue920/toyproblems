// linear time solution
var findPivot = function (array, start, end) {
  for(var i = 0; i < array.length; i++){
      if (array[i] > array[i+1]) {
        return i+1;
      }
  }
  return null;
};