const arr = new Array(10);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(10);
}

console.log(arr);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    arr[i][j] = i * j;
  }
}

console.log(arr);
console.log(arr[5][7]);

console.log(arr.toString());
