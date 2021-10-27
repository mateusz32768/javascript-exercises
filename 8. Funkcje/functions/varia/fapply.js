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

sayNameForAll.apply(this, ['globalny']);
sayNameForAll.apply(person1, ['person1']);
sayNameForAll.apply(person2, ['person2']);

function sum(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

var num = [2, 3, 4, 5, 6, 10];

console.log(sum(num));

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
