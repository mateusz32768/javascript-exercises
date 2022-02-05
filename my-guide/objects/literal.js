const person = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 32,
  sayHello: function(){
    console.log(`Cześć! mam na imię ${this.firstName}`);
  }
};

console.log(person.sayHello());