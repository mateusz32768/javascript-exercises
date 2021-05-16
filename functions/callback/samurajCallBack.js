function sum(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function calc(a, b, callback) {
  console.log(`Wprowadzone wartości: ${a}, ${b}`);
  return callback(a, b);
}

/* Powyższą funkcję możemy wywołać z dowolnym callbackiem
 * (funkcją zwrotną), która jest zaimplementowana czyli możemy ją
 * wywołać podająć jako argument np sum lub substract
 */

let result = calc(20, 10, sum);
console.log(result);

result = calc(25, 5, substract);
console.log(result);

function showInConsole(x) {
  console.log(x);
}

function showMessage(message) {
  console.log(message);
}

function show(x, callback) {
  callback(x);
}

show('Hejka, hejka', showInConsole);
show(
  'Wiadomość dla ludzi dobrej woli: Joe Biden 46 prezydentem USA',
  showMessage
);
