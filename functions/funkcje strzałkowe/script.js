const power = (base, exponent) => {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(2, 8));

const square = x => x * x;

console.log(square(5));

const horn = () => console.log('Welcome');

horn();
