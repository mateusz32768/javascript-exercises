function getPriceWithDiscount(basicPrice) {
  console.log(discount);
  var totalPrice = basicPrice * (1 - discount); // Odwołanie do zmiennej przed jej deklaracją.
  var discount = 0.2;
  return totalPrice;
}

console.log(getPriceWithDiscount(120));
// NaN; nie ma błędu jest zwrócona wartość NaN, która jest błędna

// Zachowanie kodu, gdy odwołujemy się zmiennych przezd ich zadeklarowaniem
// Jest to tylko możliwe przy deklarowaniu zmiennych ze słowem kluczowym var

var namePerson = myName + surname;

console.log('Nazywam się ' + namePerson);

console.log(`Nazywam się ${myName} ${surname}`);
console.log('Nazywam się ' + myName + ' ' + surname);

var myName = 'Marek';
var surname = 'Raubuć';



console.log(`Nazywam się ${myName} ${surname}`);