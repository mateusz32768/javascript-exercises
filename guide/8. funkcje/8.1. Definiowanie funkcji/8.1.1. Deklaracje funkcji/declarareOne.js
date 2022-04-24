function getUserData(user) {
  const { name, age } = user;
  return { name, age };
}

const user = {
  name: 'Marek',
  age: 65,
};

let userData = getUserData(user);

console.log('1. ', userData);
console.log('2. ', typeof userData);

function divide(a, b) {
  if (b !== 0) {
    return (a / b).toFixed(2);
  }
  return 'Nie dziel cholero przez zero!';
}

let result = divide(6, 9);
console.log('3. ', result);

result = divide(6, 0);

console.log('4. ', result);

const divideOne = (a, b) =>
  b !== 0 ? a / b : 'Mówiła pani w szkole nie dziel cholero przez zero';

result = divideOne(8, 9);
console.log('5. ', result);

result = divideOne(8, 0);
console.log('6. ', result);

function divideTwo(a, b) {
  return b !== 0 ? a / b : 'Nie dzielimy przez zero!!!';
}

result = divideTwo(10, 9);
console.log('7. ', result);

result = divideTwo(10, 0);
console.log('8. ', result);

function divideThree(a, b) {
  let result;
  if (b !== 0) {
    result = (a / b).toFixed(2);
  } else {
    result = 'Nie dzielimy przez zero';
  }
  return result;
}

console.log('9. ', divideThree(21, 0));
