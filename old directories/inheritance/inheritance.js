function Shape() {
  this.name = 'Shape';
  this.toString = function () {
    return this.name;
  };
}

function TwoDShape() {
  this.name = '2D shape';
}

function Triangle(side, height) {
  this.name = 'Triangle';
  this.side = side;
  this.height = height;
  this.getArea = function () {
    return (this.side * this.height) / 2;
  };
}

// Dziedziczenie po instancji Shape
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();
// Całkowite nadpisanie prototypu wymaga
// na nowo ustawienia właściwości constructor
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

const triangle = new Triangle(5, 10);

console.log(triangle.getArea());
console.log(`triangle.toString(): ${triangle.toString()}`);

console.log(triangle.constructor === Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof TwoDShape); // true
console.log(triangle instanceof Triangle); // true
console.log(Shape.prototype.isPrototypeOf(triangle)); // true
console.log(TwoDShape.prototype.isPrototypeOf(triangle)); // true
console.log(Triangle.prototype.isPrototypeOf(triangle)); // true

const td = new TwoDShape();
console.log(td.constructor === TwoDShape);
console.log(td.toString());

const shape = new Shape();
console.log(shape.constructor === Shape);
console.log(shape.toString());

console.log(td.gerArea());
