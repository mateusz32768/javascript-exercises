// function rand(number) {
//   let flag;
//   number % 2 === 0 ? (flag = true) : (flag = false);
//   return flag || Math.floor(Math.random() * number);
// }

// console.log(rand(6));

// function randOne(number = 10) {
//   number--;
//   if (number === 0) {
//     return;
//   }

//   let result = Math.floor(Math.random() * number);

//   console.log(result);

//   return randOne(number) || console.log('Wylosowałeś zero');
// }

// randOne(15);

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 8));

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(9));
