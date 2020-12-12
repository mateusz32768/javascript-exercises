function foo() {
  let a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}

foo(); // ReferenceError : niezdefiniowane .