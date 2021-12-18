var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4];
arr2 = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];

// console.log(arr);  // [ 5, 8, 1, 2, 1, 33, 23, 18, 4 ]
// console.log(arr2); // [ 'anita', 'Tomek', 'Ania', 'Andrzej', 'Mateusz', 'Kasia' ]

console.log(arr.sort());

arr.sort(function (a, b) {

  return a - b; // Ta instrukcja jest 
  // równoważna poniższemu kodowi

  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
});

console.log(arr);

arr2.sort((a, b) => {
  // return a -b tu nie zadziała, gdyż mamy
  // do czynienia z tablicą stringów (a - b = NaN)

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr2);