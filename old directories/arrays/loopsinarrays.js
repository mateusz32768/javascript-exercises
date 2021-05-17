const numbers = [2, 3, 17, 32, 28, 9];
let text = "Wylosowane liczby to: ";

const arrLength = numbers.length; // Tak robimy przy bardzo dużych tablicach
// aby zoptymalizować kod, sięgamy do pamięci tylko raz

for (let i = 0; i < numbers.length; i++) {
  text += numbers[i];

  if (i !== arrLength - 1) {
    text += ", ";
  }
}

console.log(`${text} \n`);

const arr = [["Tomasz", "Kowalski", 23], ["Maria", "Nowak", 30], ["Jacek", "Zieliński", 38]];

for (let i = 0; i < arr.length; i++) {
  console.log('DANE: ');

  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }

  console.log('----------------');
}


