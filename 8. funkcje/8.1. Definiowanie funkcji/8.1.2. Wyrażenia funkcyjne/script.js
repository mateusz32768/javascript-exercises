// Wyrażenia funkcyjne
const square = function (x) {
  return x * x;
}


// Nadano nazwę funkcji aby się do niej odwołać w kodzie
const factorial = function fac(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}

const arr = [23, 45, 12, 3, 6, 8];

arr.sort(function (a, b)  {
  return a - b;
});

console.log(arr);

// Wywołanie po zdefiniowaniu
const cube = (function(x){
  return x * x * x;
})(5);

console.log(cube);