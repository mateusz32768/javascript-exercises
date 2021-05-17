//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const arr = [32, 11, 2, 0, 45, 99, 3, 5];

console.log(arr);
console.log(arr.slice(4));
console.log(arr.slice(3, 6)); // wytnij tablicę począwszy od elmentu
// o indeksie 3 a skończywszy przed elementem o indeksie 6
// ujemna wartość określa indeks od końca; -1 jest elementem przedostatnim

// Zwraca pierwszy (najmniejszy) indeks elementu w tablicy lub wartość -1 
// jeśli takiego elementu nie ma 


console.log(arr.indexOf(11)); // 1
console.log(arr.indexOf(11) !== -1); // true

const myArr = [23, 4, 5, 77, 23, 45, 8, 5, 9, 8, 101, 5, 23];
const indices = [];
let counter = 0;
let index = 0

//https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/indexOf
for (let i = 0; i < myArr.length; i++) {
  index = myArr.indexOf(myArr[i]);

  while (index !== - 1) {
    index = myArr.indexOf(myArr[i], index + 1);
    counter++;
  }

  console.log(`Liczba ${myArr[i]} powtórzyła się ${counter} razy`);
  counter = 0;
}

console.log('\nPojedyncza liczba\n');

let indexOne = 0
indexOne = myArr.indexOf(myArr[0]);
let counterOne = 0;

while (indexOne !== - 1) {
  console.log(`Indeksy to ${indexOne}`);
  indexOne = myArr.indexOf(myArr[0], indexOne + 1);
  counterOne++;
}

console.log(`Liczba ${myArr[0]} powtórzyła się ${counterOne} razy`);

