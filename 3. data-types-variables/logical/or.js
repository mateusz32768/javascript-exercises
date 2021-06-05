let x = 0;
let y = 1;

console.log(`Operator "||" zwrócił: ${x === 0 || y === 0}`); // Operandy są wartościami logicznymi => true

let messageOne = 'Ta wiadomość jest prawdziwa';
let messageTwo = 'Ta też';

console.log(`Operator "||" zwrócił: ${messageOne || messageTwo}`);// Operandy nie sa wartościami logicznymi => "Ta wiadomość jest prawdziwa"

messageOne = '';

console.log(`Operator "||" zwrócił: ${messageOne || messageTwo}`); // => "Ta też"

messageOne = 'Ta wiadomość jest ponownie prawdziwa';
messageTwo = '';

console.log(`Operator "||" zwrócił: ${messageOne || messageTwo}`); // => "Ta wiadomość jest ponownie prawdziwa"

let numberOne = 23;
let numberTwo = NaN;

console.log(`Operator "||" zwrócił: ${numberOne || numberTwo}`); // => 23