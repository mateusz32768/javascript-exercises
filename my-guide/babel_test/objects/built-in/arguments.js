function foo() {
  return arguments;
}

console.log(foo(1, 2, 3, 4));

// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// callee: ƒ foo()
// length: 4
// Symbol(Symbol.iterator): ƒ values()
// __proto__: Object

function fooOne() {
  // const args = [].slice.call(arguments);
  const args = Array.prototype.slice.call(arguments);
  return args.reverse();
}

console.log(fooOne(1, 2, 3, 4)); // [ 4, 3, 2, 1 ]
