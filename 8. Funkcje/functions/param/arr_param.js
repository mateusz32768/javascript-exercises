function displayArray(arr) {
  arr.length = 4;
  return arr
}

var numbers = [2, 3, 5, 6, 7, 8, 9];

console.log(displayArray(numbers));
// tablica zmodyfikowana 
console.log(numbers);

// tablica także jest obiektem i tutaj do funkcji przekazujemy 
// referencję do tej tablicy i modyfikujemy jej rozmiar ale tej referencji w
// w funkcji nie możemy przypisać do innej tablicy, przekazujemy kopię referencji
// referencję przekazujemy przez wartość

function displayArrayOne(arr) {
  arr = [3, 7, 9, 9, 9]
  return arr;
}

console.log(displayArrayOne(numbers));
// tablica nie zmodyfikowana
console.log(numbers);

// [ 2, 3, 5, 6 ]
// [ 2, 3, 5, 6 ]
// [ 3, 7, 9, 9, 9 ]
// [ 2, 3, 5, 6 ]