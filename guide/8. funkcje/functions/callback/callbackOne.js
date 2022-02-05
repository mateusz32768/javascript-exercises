// funkcja może przyjmować jako argument inną funkcję

function myFunction(array, callback) {
  const arrayInner = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) > 1) {
      arrayInner.push(callback(array[i]));
    }
  }

  return arrayInner;
}

function convert(number) {
  if (number % 2 === 0) {
    return number;
  } else {
    return 1;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const even = myFunction(array, number => number % 2 === 0 ? number : 1);
console.log(even);

let flag = array.every(value => value % 2 === 0);
console.log(flag)

flag = even.every(value => value % 2 === 0);
console.log(flag);

setTimeout( function(){
  console.log('Welcome!');
}, 2000)


