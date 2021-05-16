let arrayResults = [];

let compare = [];
let numbers = [];

for (let i = 0; i < 49; i++) {
  compare[i] = i + 1;
}

console.log(compare);

let counter = 0;
for (let i = 0; i < arrayResults.length; i++) {
  if (arrayResults[i] === 1) {
    counter++;
  }
}

numbers[0] = counter;
console.log(numbers[0]);

counter = 0;
for (let i = 0; i < arrayResults.length; i++) {
  if (arrayResults[i] === 2) {
    counter++;
  }
}

numbers[1] = counter;
console.log(numbers[1]);
