function foo(a, b) {
  return a * b;
}

console.log(foo.length);
console.log(foo.prototype);
// W prototypie zawarty jest konstruktor i
// połączenie __proto__ z Object

// {constructor: ƒ}
// constructor: ƒ foo(a, b)
// __proto__: Object

console.log(typeof foo.prototype);
// console.log();
// console.log();