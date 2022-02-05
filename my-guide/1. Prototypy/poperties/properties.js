function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + " : " + this.lastName;
}

Person.prototype.country = "Poland";

let p1 = new Person("Jan", "Kowalski");
let p2 = new Person("Anna", "Abacka");

console.log(p1.country);
console.log(p2.country);

p1.country = "Germany";
p2.country = "France";

console.log(p1.country);
console.log(p2.country);

console.log(p1.__proto__.country);
console.log(p2.__proto__.country);