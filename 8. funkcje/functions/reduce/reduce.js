const arr = [8, 9, 11, 12, 34];

let result = arr.reduce((preVal, val) => {
  return preVal + val;
});

console.log(result);
