// function myFun(a, callback) {
//   return callback(a);
// }

// myFun(2, 2 => 2 * 2);

function multiplyByTwo(a, b, c) {
  let ar = [];

  for (let i = 0; i < 3; i++) {
    ar[i] = arguments[i] * 2;
  }

  return ar;
}

function addOne(a) {
  return a + 1;
}

let myarr = [];

myarr = multiplyByTwo(10, 20, 30);

console.log(myarr);

for (let i = 0; i < 3; i++) {
  myarr[i] = addOne(myarr[i]);
}

console.log(myarr);

function multiplyByTwoBis(a, b, c, callback) {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = callback(arguments[i] * 2);
  }

  return arr;
}

myarr = multiplyByTwoBis(3, 4, 6, addOne);
console.log(myarr);

myarr = multiplyByTwoBis(7, 9, 11, a => a + 1);
console.log(myarr);


function myFun(a, callback) {
  return callback(a);
}

function product(a) {
  return a * a;
}

let pr = myFun(2, product);
console.log(pr);