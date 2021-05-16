function vector(x, y, callback) {
  return callback(x, y);
}

let module = vector(3, 4, (x, y) => (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))).toFixed(2));
console.log(module);

let angle = vector(4, 4, (x, y) => (Math.atan(y / x)) * (180 / Math.PI));
console.log(angle);

function sumFun(a, b) {
  return a() + b();
}

console.log(sumFun(() => 2, () => 3));

function multi(a, calback) {
  return 2 * calback(a);
}

console.log(multi(3, x => x * x));

