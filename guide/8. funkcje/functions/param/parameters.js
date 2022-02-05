function sqaure(num) {
  return num * num;
}

console.log(sqaure(2)); // 4

function sum(a, b) {
  console.log(b);
  return a + b;
}

console.log(sum(4, 7));

console.log(sum(11));
// nie podaliśmy drugiego argumentu
// 11 + undefined = NaN

console.log(sum(3, 6, 8)); // trzeci argument zostanie zignorowany

var name = 'Tomasz';

function sayHello(text) {
  text += ' Kowalski';
  return 'Witaj, ' + text;
}
console.log(sayHello(name));
// do funkcji przekazujemy argumenty poprzez wartość
// czyli kopie tych zmiennych, zmienne zostają nienaruszone
// funkcje nie mogą modyfikować zmiennych zewnętrznych, dlatego też 
// gdy zmienne są przekazywane do funkcji to są przekazywane ich kopie.
console.log(name);

// mimo iż w funkcji zmienna, została zmodyfikowana, to pozostaje nie naruszona

// Typy primitywne są przekażywane do funkcji przez wartość 
// czyli są przekazywane ich kopie

console.log('\nZmienna do zmiennej jest kopiowana\n')

var firstName = 'Grzegorz';

var studenName = firstName; // przekazujemy kopię a nie referencję
// bo to typ prosty

console.log(studenName);
studenName = 'Krzysztof';
console.log(studenName);
console.log(firstName); // Grzegorz

