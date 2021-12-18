var arr = ["Tomek", "Ania", "Jacek", "Mariusz"];

// console.log(arr.length);

// arr.length = 2; przycinamy tablicę do dwóch elementów

// delete arr[2]; usuwamy

// var last = arr.pop();

// var first = arr.shift();


var lastTwo = arr.splice(-2, 2, "Piotr", "Andrzej"); // usuwanie od końca i dodanie elementów

console.log(lastTwo); //[ 'Jacek', 'Mariusz' ]

// tablicę możemy wyzerować :
// arr.length = 0;