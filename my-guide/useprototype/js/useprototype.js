function Person(firstName, lastName) {
  this.fName = firstName;
  this.lName = lastName;
}

// Aby metoda nie zajmowała pamięci za każdym razem gdy tworzymy instancję 
// metodę możemy doddać do prototype (prototypu)

Person.prototype.sayHello = function(){
  return `${this.fName} ${this.lName}`;
};

const person1 = new Person('Jan', 'Kowalski');

for (const key in person1) {
  if (person1.hasOwnProperty(key)) {
    console.log(person1[key]);
  }
}

// Jan
// Kowalski

for(const key in person1){
  console.log(person1[key]);
}

// Jan
// Kowalski
// f(){
//  return `${this.fName} ${this.lName}`;
// }
