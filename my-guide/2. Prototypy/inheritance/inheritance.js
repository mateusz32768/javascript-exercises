function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
}

Person.prototype.fullName = function () {
  return `${this.firstName} : ${this.lastName}`;
};

function Student(fn, ln, id) {
  this.firstName = fn;
  this.lastName = ln;
  this.id = id;
}

Student.prototype = Person.prototype;

let person1 = new Person('Jan', 'Kowalski');
console.log(person1.fullName());

let student1 = new Student('Karolina', 'Zalewska', '12345');
console.log(student1.fullName());

/*
 *  Pojawiają się tutaj jednak dwa problemy:
 *  1. powtarzalność kodu w konstruktorach,
 *  2. operowanie na tym samym prototypie. Referencje Student.prototype i Person.prototype wskazują na to samo,
 *     więc nie mamy możliwości zmodyfikowania prototypu Studenta bez modyfikacji prototypu Person, co czasami
 *     może być problematyczne, gdy typie Student chcemy  mieć dostęp do elementów, których nie ma w Person.
 * Rozwiązanie pierwszego problemu to wykorzystanie metody call().
 * Rozwiązanie drugiego problemu to przypisanie do prototypu Studenta obiektu utworzonego na podstawie prototypu
 * Person, czyli pustego obiektu posiadającego ten sam prototyp co Person.
 * Patrz plik noproblems.js
 * */
