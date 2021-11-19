console.log(isNaN('hello world'));
console.log(isNaN(''));
console.log(Number.isNaN('hello world'));
console.log(Number.isNaN(''));


function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100A')); // Not a Number!
console.log(milliseconds('')); // 0
console.log(milliseconds('0.0314E+2')); // 3140