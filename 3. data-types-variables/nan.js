// Niezależnie od wartości zmiennej porównanie z NaN zwraca false

let myVariable;
console.log(myVariable === NaN);

myVariable = NaN;
console.log(myVariable === NaN);

myVariable = 'To jest moja zmienna';
console.log(myVariable === NaN);


console.log("**************************");

function valueIsNaN (x) {
  return x !== x;
}

let message = 'JavaScript is the best';



// function sanitise(x) {
//   if (isNaN(x)) {
//     return NaN;
//   }
//   return x;
// }

console.log("Różne wyniki");

console.log(isNaN('123'));
console.log(isNaN(message));

console.log(isNaN(true));
console.log(isNaN(false));
console.log("**************************");

console.log(valueIsNaN(message));
console.log(valueIsNaN('123'));

console.log(Number.isNaN(message));
console.log(Number.isNaN('123'));
