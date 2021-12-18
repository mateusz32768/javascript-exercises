const arr = [32, 11, 2, 10, 45, 99, 3, 5];

console.log(arr);

arr.forEach(element => {
  console.log(element);
});

const newArr = arr.map(Math.sqrt);
console.log(newArr);

const numbers = [1, 4, 9, 16, 25];

const newArrOne = numbers.map(Math.sqrt);
console.log(newArrOne);



//var new_array = arr.map(function callback(currentValue, index, array) { 
// Zwróć element nowej tablicy 
//}[, thisArg])
// thisArg - opcjonalny argument, wartość jaką użyć jako this podczas
// wywołania callback


console.log(arr);
const newArrTwo = arr.map(function (value, index, array) {
  if (index % 2 === 0) {
    return array[index] = 0;
  } else {
    return array[index] = value;
  }

});
console.log(arr);
console.log(newArrTwo);

const numberOne = [44, 55, 66, 77, 88, 99];

let newNumbers = numberOne.map(function (value, index, array) {
  if (index % 2 === 0) {
    return array[index] = 2;
  }

});

console.log(newNumbers);

newNumbers = numberOne.map(function (value, index, array) {
  if (index % 2 === 0) {
    return array[index] = 2;
  } else {
    return array[index] = value;
  }

});

console.log(newNumbers);

// [ 32, 11, 2, 10, 45, 99, 3, 5 ]
// 32
// 11
// 2
// 10
// 45
// 99
// 3
// 5
// [ 5.656854249492381,
//   3.3166247903554,
//   1.4142135623730951,
//   3.1622776601683795,
//   6.708203932499369,
//   9.9498743710662,
//   1.7320508075688772,
//   2.23606797749979 ]
// [ 1, 2, 3, 4, 5 ]
// [ 32, 11, 2, 10, 45, 99, 3, 5 ]
// [ 0, 11, 0, 10, 0, 99, 0, 5 ]
// [ 0, 11, 0, 10, 0, 99, 0, 5 ]
// [ 2, undefined, 2, undefined, 2, undefined ]
// [ 2, 55, 2, 77, 2, 99 ]