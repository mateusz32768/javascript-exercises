// Niezależnie od wartości zmiennej porównanie z NaN zwraca false

let myVariable; // undefined
console.log(myVariable === NaN); // undefined === NaN ; powinno być true

myVariable = NaN;
console.log(myVariable === NaN); // NaN === NaN ; powinno być true

myVariable = 'To jest moja zmienna';
console.log(myVariable === NaN);   // 'To jest moja zmienna' === NaN; powinno być true

myVariable = 123;
console.log(myVariable === NaN);   // 123 === NaN ; powino być false


