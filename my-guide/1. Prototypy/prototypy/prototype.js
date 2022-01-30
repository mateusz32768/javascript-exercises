
// class Gadget {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.whatAreYou = function () {
//       return `Jestem ${this.color} ${this.name}`;
//     };
//   }
// }

function Gadget(name, color) {
  this.name = name;
  this.color = color;
  this.whatAreYou = function () {
    return `Jestem ${this.color} ${this.name}`;
  }
}

console.log(Gadget.prototype);
// constructor: ƒ Gadget(name, color)
// __proto__: Object

console.log(Gadget);
// ƒ Gadget(name, color) {
//   this.name = name;
//   this.color = color;
//   this.whatAreYou = function () {
//     return `Jestem ${this.color} ${this.name}`;
//   }
// }


// Dodawanie właściwości i metody do obiektu
// poprzez właściwość prototype konstruktora
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function () {
  return `Ocena użytkowników: ${this.rating} cena: ${this.price}`;
};

const newtoy = new Gadget('kamerka', 'czarna');
console.log('---------------------------------------------');
console.log('Eksperymenty z prototype');
console.log(newtoy);
console.log(newtoy.whatAreYou());

for (const key in newtoy) {
  if (newtoy.hasOwnProperty(key) && typeof newtoy[key] !== 'function') {
    console.log(newtoy[key]);
  } else if (typeof newtoy[key] === 'function') {
    console.log(newtoy[key]());
  }
}

console.log('--------------------------------------------');
console.log('Wyświetla pola własne');

for (const key in newtoy) {
  if (newtoy.hasOwnProperty(key)) {
    console.log(newtoy[key]);

  }
}

console.log('--------------------------------------------');
console.log('Wyświetla pola własne i dodane w prototypie');
for (const key in newtoy) {
  console.log(newtoy[key]);
}

console.log('--------------------------------------------');
console.log('Korzystanie z metod i właściwości obiektu prototype');

console.log(typeof Gadget.prototype); // object

console.log(newtoy.name);
console.log(newtoy.color);
console.log(newtoy.whatAreYou());
console.log(newtoy.price);
console.log(newtoy.rating);
console.log(newtoy.getInfo());
