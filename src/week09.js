var helloWorld = function () {
  //   var obj = {
  //   H : true,
  //   e : true,
  //   l : true,
  //   o : true,

  // }
  var H = true;
  var e = true;
  var l = true;
  var o = true;
  console.log(H.toString()+e.toString() + l.toString() + o.toString());
  // return new String(Object.keys(obj).join(""));
  var a = new String('Hello');
  var b = new String(' World!');
  return a + b;
}

console.log(helloWorld());