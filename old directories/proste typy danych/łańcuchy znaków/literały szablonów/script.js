let logLevel = 'debugowanie';
let logMessage = 'meltdown';

console.log(`Poziom rejestrowania: ${logLevel} - komunikat: ${logMessage}`);

let a = 10,
  b = 12;
console.log(`Suma wynosi ${a + b} a iloczyn ${a * b}`);

let numA = 10;
numB = 10;
function sum(x, y) {
  return x + y;
}
function multi(x, y) {
  return x * y;
}
console.log(
  `Suma wynosi ${sum(numA, numB)}, a wynikiem mnożenia będzie ${multi(
    numA,
    numB
  )}`
);

console.log(`To jest pierwsza linia \n a to druga`);

console.log('****************************');

function transform(strings, ...substitutes) {
  console.log(strings[0]);
  console.log(...substitutes);
}

let firstName = 'James',
  lastName = 'Bond';

transform`Nazywam się ${lastName}, ${firstName} ${lastName}`;

function rawTag(strings, ...substitutes) {
  console.log(strings.raw[0]);
}

rawTag`To jest surowy tekst i znaki \n nie są traktowane specjalnie`;

function tag(strings, ...substitutes) {
  console.log(strings[0]);
  console.log(strings[1]);
}

tag`To pierwszy string To jest drugi string`;

console.log('Pierwsza linia\nDruga linia');
console.log('Pierwsza linia\n' + 'Druga linia');
console.log(`Pierwsza linia 
Druga linia`);
