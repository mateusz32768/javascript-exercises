function foo() {
  var arr = [], i;

  for (i = 0; i < 3; i++) {
    arr[i] = function () {
      return i;
    };
    console.log(arr[i]());
  }

  return arr;
}

var arrGlobal = foo();

for (var i = 0; i < arrGlobal.length; i++) {
  console.log(arrGlobal[i]());
}

// 0
// 1
// 2
// 3
// 3
// 3
