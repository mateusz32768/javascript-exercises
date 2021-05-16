function range(start, end, step = 1) {
  const arr = [];
  for (let i = 0; i <= (end - start) / step; i++) {
    arr[i] = start + i * step;
  }

  return arr;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(range(2, 15, 3));

console.log(sum(range(1, 10, 2)));
