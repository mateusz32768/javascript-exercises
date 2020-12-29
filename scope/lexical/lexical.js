'use strict';
let a = 2;
function bar() {
  console.log(a);
  b = 3;
  console.log(b);
}
function foo() {
  let b = 1;
  bar();
}
foo();
