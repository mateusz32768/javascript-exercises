const captionOne = 10 + ' obiektów'; // => "10 obiektów": liczba 10 jest przekształcana w ciąg znaków.
const captionTwo = '7' * '4'; // => 28: oba ciągi są przekształcane w liczby.
let captionThree = 1 - 'x'; // n == NaN; ciągu "x" nie można przekształcić w liczbę.
const captionFour =  NaN + ' obiektów'; // => "NaN obiektów": wartość NaN jest przekształcana w ciąg "NaN".

console.log(`1.`,captionOne);
console.log(`2.`, captionTwo);
console.log(`3.`, captionThree);
console.log(`4.`, captionFour);

captionThree = 1 - '9';
console.log(`5.`, captionThree);