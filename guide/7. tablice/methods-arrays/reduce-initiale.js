let result = [15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue, currentIndex, array) =>
    previousValue + currentValue,
  11
);

console.log(result);
