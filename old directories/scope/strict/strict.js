'use strict';
var a = 2;
function foo() {
  b = 3;
  console.log(b);
}
foo(); // Uncaught ReferenceError: b is not defined
