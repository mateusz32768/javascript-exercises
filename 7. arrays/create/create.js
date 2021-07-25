// Tworzenie tablic za pomocą:

// 1. Za pomocą literału tablicowego

console.log(`***** A. Tworzenie tablicy za pomocą literału  tablicowego *****`);

const empty = [];

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

const arraySizes = new Set();

arraySizes.add(evenNumbers.length).add(oddNumbers.length).add(primeNumbers.length);

let i = 0
for (const el of arraySizes) {
  console.log(`${++i}.`, el);
}
const misc = [1.1, true, 'tablica'];

let base = 1024;
const table = [base, base + 1, base + 2, base + 3]; // Mogą być dowolne wyrażenia

const table1 = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

const count = [1, undefined, 3] // Tablica rozrzedzona , nie ma elementu o indeksie 1
const undefs = [undefined, undefined,] // Tablica bez elementów, o długości 2, bo można opcjonalnie na końcu tablicy postawić
// przecinek

for (const el of count) {
  console.log(`${++i}.`, el)
}

console.log('7. length = ', undefs.length);

console.log(`***** B. Za pomocą operatora rozciągania (...) i iterowalnego obiektu ******`);

const tableB = [0, 1, ...table, 34];

i = 0;

for (const el of tableB) {
  console.log(`${++i}.`, el)
}

const original = [11, 22, 33]
const copy = [...original]
copy[0] = 1;

console.log(`8. original[0] = ${original[0]}`);

const digits = [...'0123456789ABCDEF'];

console.log(`9. Tablica digits: ${digits}`);


let  numbers = [11, 11, 22, 22, 33, 33, 44,44, 55, 55];

numbers = [...new Set(numbers)];

console.log(`10. Tablica numbers: ${numbers}`);


let letters = [..."Witaj, świecie!"];
letters = [...new Set(letters)];

console.log(`11. Tablica letters: ${letters}`)





