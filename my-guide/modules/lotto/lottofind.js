const {Console} = require('console');
const fs = require('fs');

fs.readFile('results.txt', (err, data) => {
  if (err) throw err;

  let arrayResults = [];

  arrayResults = data.toString().split(',');

  for (let i = 0; i < arrayResults.length; i++) {
    arrayResults[i] = parseInt(arrayResults[i]);
  }

  let compare = [];
  let numbers = [];

  for (let i = 0; i < 49; i++) {
    compare[i] = i + 1;
  }

  for (let j = 0; j < compare.length; j++) {
    let counter = 0;
    for (let i = 0; i < arrayResults.length; i++) {
      if (arrayResults[i] === compare[j]) {
        counter++;
      }
    }
    numbers[j] = counter;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
    // sum += numbers[i];
    // console.log(sum);
  }

  numbers.sort((a, b) => {
    return a - b;
  });

  console.log(numbers);

  const NUMBER_OF_DRAW = 6494;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = ((numbers[i] / NUMBER_OF_DRAW) * 100).toFixed(2);
  }

  console.log(numbers);
});
