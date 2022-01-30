function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.distance = function() {
  return Math.sqrt(this.x ** 2 + this.y ** 2);
}

Point.prototype.print = function () {
  console.log(`x: ${this.x} y: ${this.y}`);
};

const pointA = new Point(5, 6);

/*
 * Obiekt pointA stworzony za pomocą operatora new oprócz składowych
 * zaimplementowanych przez konstruktora Point() otrzymuje od silnika
 * JS  właściwość __proto__ () (tak ją nazywa przeg. Chrome, a FireFox <prototype>)
 * która jest obiektem. Obiekt ten jest prototypem utworzonego obiektu pointA.
 * Prototyp zawiera właściwość construktor, który skolei zawiera referencję do
 * konstruktora obiektu pointA oraz __proto__,które prowadzi do
 * do prototypu  prototypu obiektu pointA czyli do obiektu Object.prototype
 **/

pointA.print();
console.log(pointA.distance().toFixed(2));

console.log(pointA);

console.log(pointA.constructor);
console.log(pointA.prototype);

console.log(pointA.__proto__);
/*
 * Właściwośc __proto__ jest to właściwość zaimplementowana w przeglądarce'
 * W standarcie EcmaScript jej nie ma i nie nalezy je uzywać w programach.
 * Może służyć li tylko do nauki, czy testowania lub debugowania programów.
 * Dodająć do tej właściwości jakieś składowe dodajemy je do już istniejących obiektów
 * i do nowo tworzonych, dlatego zapewne tej właściwości nie należy stosować, gdyż
 * twórcy języka tak go ZAPROJEKTOWALI, aby właściwości można było dodawać do obiektów
 * poprzez Point.prototype.
 *
 **/

console.log(Point.prototype.__proto__);

console.log(
  '\n\n*************** ------ Teraz badamy punkt B ----  *****************'
);

const pointB = new Point(6, 9);

pointB.print();
console.log(pointB.distance());

console.log(pointB);

console.log(pointB.constructor);
console.log(pointB.prototype);
console.log(pointB.__proto__);

pointB.__proto__.print = function () {
  console.log(`y: ${this.x} x: ${this.y}`);
};

pointA.print();
pointB.print();

console.log(pointA);
console.log(pointB);

console.log(Point.prototype.print);
