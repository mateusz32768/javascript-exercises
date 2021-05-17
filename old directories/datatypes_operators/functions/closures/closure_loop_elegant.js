function foo() {
  function binder(x) {
    return function () {
      return x;
    };
  }

  var arr = [], i;
  for (i = 0; i < 3; i++) {
    arr[i] = binder(i);
  }

  return arr;
}

var arrGlobal = foo();

for (i = 0; i < arrGlobal.length; i++) {
  console.log(arrGlobal[i]());
}

// 0
// 1
// 2