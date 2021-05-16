var global = 11;

function foo() {
  var local = 11;
  return global;
}

console.log(foo()); // 11
// console.log(local); // ReferenceError: local is not defined

function wrapValue(n) {
  return () => n;
}

console.log(wrapValue(5));
console.log(wrapValue(5)());
