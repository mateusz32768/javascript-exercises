var arr = [32, 11, 2, 0, 45, 99, 3, 5];

console.log(arr);

var half = arr.slice(-4, 6);

// console.log(half);

// console.log(arr.join(", "));

// console.log(arr.indexOf(101) !== -1);

// console.log(arr.concat(half));

arr.forEach(function (value, index, array) {

  // console.log(value);

});

var gt10 = arr.filter(function (value) {

  return value > 10;

});

// console.log(gt10);

var negative = arr.map(function (value) {

  return value * -1;

});

console.log(negative);