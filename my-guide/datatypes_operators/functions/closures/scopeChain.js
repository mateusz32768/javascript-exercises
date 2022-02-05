var global = 11;

function foo() {
  var local = 11;
  return global;
}

console.log(foo()); // 11
console.log(local); // ReferenceError: local is not defined

