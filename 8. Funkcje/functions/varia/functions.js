// TODO
function sayNameForAll(label) {
  console.log(label + ': ' + this.name);
}

var person1 = {
  name: 'Nicolas',
};

var person2 = {
  name: 'Greg',
};

var name = 'Micheal';

// funkcja sayNameForAll jest tu traktowana jako obiekt
// na którym jest wywoływana jego metoda call
sayNameForAll.call(this, 'globalny');
sayNameForAll.call(person1, 'person1');
sayNameForAll.call(person2, 'person2');

console.log(sayNameForAll);
console.log(sayNameForAll.constructor);
console.dir(sayNameForAll.prototype);
// console.log();
// console.log();

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
