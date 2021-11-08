function sayHello() {
  console.log('Witaj');
}

sayHello();
// każda funkcja nie zawierająca słowwa kluczowego return zwraca domyślnie
// wartość undefined

function sayHello2() {
  return 'Siema, ';
}

var hello = sayHello2();

console.log(hello);

console.log(sayHello2() + 'Maciej');

function makeArray() {
  var arr = [1, 2, 3, 4];

  return arr;
}

console.log(makeArray()[2]); // W wielu językach coś takiego jest niedostępne

console.log(makeArray().length);

function hi() {
  if (true) {
    console.log('Kończę funkcję');
    return;
  }
  console.log('Cześć');
}

hi();

function hello2() {
  if (false) {
    console.log('Kończę funkcję');
    return; // to definitywnie kończy funkcję;
  }
  console.log('Cześć');
}

hello2();
