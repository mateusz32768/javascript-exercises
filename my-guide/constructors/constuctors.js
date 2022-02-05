function Person() {
  //celowo pusta
}

var person1 = new Person();
var person2 = new Person();

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
console.log(person1.constructor === Person); // true

console.log(person1.constructor);
// ƒ Person() {
//   //celowo pusta
// }

console.log(person2.constructor === Person); // true

function Human(name) {
  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },
    set: function (newName) {
      name = newName;
    },
    enumerable: true,
    configurable: true,
  });
  this.sayName = function () {
    console.log(this.name);
  };
}

var human1 = new Human('Marek');
human1.sayName();
// console.log();
// console.log();
// console.log();
// console.log();
