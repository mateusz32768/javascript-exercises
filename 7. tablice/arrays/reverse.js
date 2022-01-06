function reverseArray(arr) {
  const newArray = [];
  let indexOfLastElement = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[indexOfLastElement - i];
  }

  return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 8]));
