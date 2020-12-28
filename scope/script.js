'use strict';
var a = 2;
function foo() {
  b = 3;
}
foo(); // Uncaught ReferenceError: b is not defined
