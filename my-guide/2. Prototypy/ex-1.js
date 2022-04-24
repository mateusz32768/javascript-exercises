// Przekopiowane wprawki z consoli

[1, 2, 3, 4, 5, 6].map(elem => elem * elem); // => [1, 4, 9, 16, 25, 36]

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype;
// => // {constructor: ƒ}
// constructor: ƒ Person(firstName, lastName)
// [[Prototype]]: Object[[FunctionLocation]]

Person.prototype.display = function() {
  console.log(`Nazywam się ${firstName} ${lastName}`);
};

const janKowalski = new Person('Jan', 'Kowalski');
janKowalski.display();
// Uncaught ReferenceError: firstName is not defined
// at Person.display (<anonymous>:2:28)

Person.prototype.display = function() {
  console.log(`Nazywam się ${this.firstName} ${this.lastName}`);
};


janKowalski.display();  // =>Nazywam się Jan Kowalski

Person.prototype.country = 'Poland';

let country = janKowalski.country; // => 'Poland'

const johnKovalsky = new Person('John', 'Kovalsky');

country = johnKovalsky.country; // =>'Poland'
console.log(country);
johnKovalsky.country = 'USA';

country = johnKovalsky.country; // => 'USA'
console.log(country);
