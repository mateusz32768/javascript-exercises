var arr = [1, 45, 22, 31, 3];

arr.sort(function (a, b) {
  return a - b;
});

// funkcje anonimowe stosujemy tam, gdzie chcemy aby funkcja była
// raz wykorzystana. Jeśli ją nazwiemy to pozostanie ona w pamięci aż do zakończenia programu
// albo aż ją nie usunie garbage collector
// funkcje anonimowe możemy przekazywać jako parametry do funkcji jak to zrobiliśmy wyżej

function sayName(text, getName) {
  var result = text + getName();
  return result;
}

// Możemy funkcję anonimową przypisać do zmiennej, gdyż funkcja jest także daną
var name = function () {
  return 'Piotr';
}

console.log(sayName('Witaj, ', name));

function sortElement(cb){
   let value = cb();

   if(value === 0){

   }
}

