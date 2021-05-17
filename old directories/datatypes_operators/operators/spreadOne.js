console.log(Math.max(3, 5, 7)); // 7
const numbers = [3, 5, 7];
console.log(Math.max(numbers)); // NaN, bo numbers nie jest typu number tylko typu tablica
console.log(Math.max(...numbers)); // 7

console.log(Math.max.apply(Math, numbers))