10 + ' obiektów'; // => "10 obiektów": liczba 10 jest przekształcana w ciąg znaków.
'7' * '4'; // => 28: oba ciągi są przekształcane w liczby.
let n = 1 - 'x'; // n == NaN; ciągu "x" nie można przekształcić w liczbę.
NaN + ' obiektów'; // => "NaN obiektów": wartość NaN jest przekształcana w ciąg "NaN".

console.log(NaN + ' obiektów');
