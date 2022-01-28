// function Person(){

// }

// const person1 = new Person(); // object

// //const person1 = Person(); // undefined

function PersonOne(name, surname) {
  return {
    firstName: name,
    lastName: surname,
  };
}

const personOne = PersonOne('Kazik', 'Silnoręki'); // {firstName: "Kazik", lastName: "Silnoręki"}

// Powyższy przykład pokazuje, że można stosować funkcję konstruktora bez operatora new 
// np new Date() jaki Date() - między nimi jest subtelna różnica - jaka? - TODO

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayHello = function(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('Jan', 'Kowalski');
const person2 = new Person('Tomasz', 'Nowak');


// W JS funkcja konstruktora pełni rolę klasy czyli wzorca(szablonu)
// na podstawie którego tworzymy instancje. Funkcję Person możemy 
// utożsamiać z klasą Person
// w Javie było by Person person1 = new Person("Jan", "Kowalski");
// po uprzednim zadeklarowaniu klasy tak:
// class Person {
//   String name;
//   String surname;
// }

// w php  TODO

person1 instanceof Person // true

person1 instanceof Object // true