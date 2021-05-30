// zmienne deklarowane  za pomocą var są hoistingowane a za pomocą let i const nie
// deklaracje funkcji w zależności od sposobu deklaracji


console.log(myFunctionBis(2, 8));

function myFunctionBis(a, b) { // Ta definicja jest hoistingowana
  return a ** b;
}

const myFunction = function(x, y) { // A ta nie
  return x + y;
}

console.log(myFunction(3, 8));

var myVariable = 'Marco';

function foo() {
  console.log(myVariable);
  var myVariable = 'Kleopatra';
  console.log(myVariable);
}

foo();

console.log(myVariable);

