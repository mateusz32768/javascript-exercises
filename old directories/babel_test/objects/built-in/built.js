
var sum = new Function('a', 'b', 'return a + b;');

console.log(sum(3, 4)); // 7

// Pierwszy sposób
var sumOne = function (a, b) {
  return a + b;
};

console.log(sumOne(3, 4));

// Drugi sposób
function sumTwo(a, b) {
  return a + b;
}

console.log(sumTwo(3, 4));

var first = new Function('a, b, c, d, e', 'return arguments;');
var result = first(2, 3, 4, 5, 7);
console.log(result); // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 7 }

console.log(`\n*************************\n`)

var ninja = {
  name: 'Ninja',
  say: function () {
    return `Jestem ${this.name}`;
  }
}

console.log(`Prototyp pustego obiektu: ${{}.prototype}`);

console.log(`Prototyp literału obiektowego: ${ninja.prototype}`);
// Prototyp literału obiektowego: undefined
console.log(`Konstruktor literału obiektowego: ${ninja.constructor}`);
//Konstruktor literału obiektowego: function Object() { [native code] }
console.log(ninja.constructor);
console.log(`Prototyp konstruktora literału obiektowego: ${ninja.constructor.prototype}`);
// Prototyp konstruktora literału obiektowego: [object Object]
console.log(ninja.constructor.prototype);
// {}
console.log(ninja.say.prototype);

function Foo() { };
console.log(typeof Foo.prototype); // object

Foo.prototype = ninja;

var baby_ninja = new Foo();
console.log(baby_ninja.name); // Ninja
console.log(baby_ninja.say()); // Jestem Ninja





