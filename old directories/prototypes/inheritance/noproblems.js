function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
}

Person.prototype.fullName = function () {
  return this.firstName + ' : ' + this.lastName;
};

function Student(fn, ln, idNumber) {
  Person.call(this, fn, ln); //Javowe super(fn, ln)
  this.idNumber = idNumber;
}

///utworzenie nowego obiektu z prototypem ustawionym na Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.fullInfo = function () {
  return this.firstName + ' ' + this.lastName + ' ' + this.idNumber;
};

const person1 = new Person('Jan', 'Kowalski');
const student1 = new Student('Karolina', 'Zalewska', '12345');

console.log(person1.fullName());
console.log(student1.fullName());
console.log(student1.fullInfo());

/*
 *  jeżeli wywołujemy poprzez referencję student1 metodę fullName(), to nie zostaje ona odnaleziona w obiekcie,
 *  na który wskazuje student1, ani w jego prototypie, ale dopiero jeszcze jeden poziom wyżej.
 * */
