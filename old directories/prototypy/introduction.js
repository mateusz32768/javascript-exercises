function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  this.personalData = function () {
    console.log(`Nazywam się ${this.name} ${this.surname}`);
  }
}

const car = {
  mark: 'opel',
  model: 'corsa',
  capacity: 1600,
}

console.log(car.prototype);

console.log(Person.prototype);

//console.log(Person.prototype = {});

Person.prototype.city = 'Wrocław';
Person.prototype.job = 'technik utrzymania ruchu';

Person.prototype.info = function () {
  console.log(`Paracuję jako ${this.job} i mieszkam we ${this.city} `);
}

const mechanic = new Person('Paweł', 'Kowal');
const electrician = new Person('Rafał', 'Torański');

mechanic.personalData();
mechanic.info();

electrician.personalData();
electrician.info();

for (const key in mechanic) {
  if (mechanic.hasOwnProperty(key)) {
    console.log(mechanic[key]);
  }
}

for (const prop in electrician) {
  if (typeof electrician[prop] !== 'function'){
    console.log(electrician[prop]);
   }
}