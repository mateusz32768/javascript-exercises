let message = 'Będziemy tą wiadomość negowali';

console.log(!!message); // => true

let messageOne = 'Pierwsza wiadomość';
let messageTwo = 'Druga wiadomość';


// Prawa De Morgana
console.log(!(messageOne && messageTwo) === (!messageOne || !messageTwo));
console.log(!(messageOne || messageTwo) === (!messageOne && !messageTwo));

console.log(!(messageOne && messageTwo));
console.log(!messageOne || !messageTwo);

console.log(false === false); // => true;