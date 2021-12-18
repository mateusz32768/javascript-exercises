function foo() {
  var arr = [], i;
  for (i = 0; i < 3; i++) {
    arr[i] = (function (x) {
      return function () {
        return x;
      };
    })(i);
  }

  return arr;
}

var arrGlobal = foo();

for (let i = 0; i < arrGlobal.length; i++) {
  console.log(arrGlobal[i]());
}

// 0
// 1
// 2