function reverseArray(array) {
  const arr = [];
  for (const el of array) {
    arr.unshift(el);
  }
  return arr;
}

const arr = [1, 3, 4, 5, 6, 7, 9];

function reverseArrayInPlace(array) {
  const arr = [];
  for (const el of array) {
    arr.unshift(el);
  }
  console.log(arr);
}

console.log(reverseArray(arr));
reverseArrayInPlace(arr);
console.log(reverseArray(['A', 'B', 'C']));
