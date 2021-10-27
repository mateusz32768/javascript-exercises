const strs = ["one", "two", "three", "four", "five"];

console.log(strs);
console.log(...strs);

function sumAll(a, b, c) {
  return a + b + c;
}

const numbers = [4, 6, 8];
console.log(sumAll(numbers));
console.log(sumAll(...numbers));

function sum(arr) {
  let result = 0;
  for (const el of arr) {
    result += el;
  }

  return result;
}

const table = [2, 4, 6, 8, 10, 12];

console.log(sum(table));
