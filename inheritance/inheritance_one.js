function Shape() {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
  return this.name;
};

function TwoDShape() {}
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';

const twoDShape = new TwoDShape();

function Triangle(side, height) {
  this.side = side;
  this.height = height;
}

Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
  return (this.side * this.height) / 2;
};

const triangle = new Triangle(4, 8);

console.log(triangle.getArea());
console.log(triangle.toString());
console.log(twoDShape.toString());
