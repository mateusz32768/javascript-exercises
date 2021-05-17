var person = {
  name: 'Krzysztof',
  surname: 'Kowalski',
};

console.log(person.name);

function sayHello(obj) {

  obj.name = 'Piotr';

  return `Witaj ${obj.name} ${obj.surname}`;
}


console.log(sayHello(person));
console.log(person.name);

// do funkcji gdy przekazujemy obiekty to przekazujemy je też
// przez wartość ale wartość referencji czyli funkcja nie 
// może zmodyfkować referencji do obiektu ale za to może
// zmodyfikować obiekt, gdyż działa na jego referencji

function experimental(obj, age) {

  obj = {
    age: age,
  };

  return `Witaj ${obj.name} ${obj.surname} podobno masz ${obj.age} lat`;

}

console.log(experimental(person, 23));// nie nadpiszemy obiektu

console.log(person);

var student = person;  // Tu przekazujemy referencję do obiektu person

console.log(student);
student.age = 23;   // Modyfikacja obiektu student powoduje modyfikację person
console.log(person);

// Funkcje za momocą referencji mogą modyfikować obiekt ale nie mogą sprawić 
// aby referencja wskazywała na inny obiekt - referencje przekazywane są przez 
// wartość

function experimentalOne(obj, age) {
  obj.age = age;
  return `Witaj ${obj.name} ${obj.surname} podobno masz ${obj.age} lat`;
}

console.log(experimentalOne(person, 32));

// Krzysztof
// Witaj Piotr Kowalski
// Piotr
// Witaj undefined undefined podobno masz 23 lat
// { name: 'Piotr', surname: 'Kowalski' }
// { name: 'Piotr', surname: 'Kowalski' }
// { name: 'Piotr', surname: 'Kowalski', age: 23 }
// Witaj Piotr Kowalski podobno masz 32 lat