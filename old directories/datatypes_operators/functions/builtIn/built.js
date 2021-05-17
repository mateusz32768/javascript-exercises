//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// funkcja eval - zła reputacja 
// przyjmuje tekst, który jest kodem

//alert('Witaj');

//eval("alert('Witaj')");

// funkcja isFinite sprawdza, czy liczba jest liczbą skończoną (true)
// jeśli jest nieskończoną to - false

console.log(isFinite(2)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

// isNaN sprawdza czy dana wartość jest not a number (true)

console.log(isNaN(NaN)); // true

console.log(typeof NaN);
console.log(typeof null);

console.log(isNaN(2 * undefined));

if (!isNaN(2 + undefined)) {
  return 0;

} else {
  console.log('Niedozwolone działanie!');
}

// parseTyp() zamienia stringi na liczby o type typ

console.log(parseFloat('20.03zł')); // 20.3
console.log(parseInt('33zł')); // 33

// alert nie jest dostępna w nodejs