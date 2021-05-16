function Point(x, y) {
  this.x = x;
  this.y = y;
}

const point = {
  coordinateX: 3,
  coordinateY: 4,

  determinatePoint(x, y) {
    this.coordinateX = x;
    this.coordinateY = y;
  },
};
console.log(point.constructor);
console.log(point.prototype);
console.log((point.prototype = Point));
console.log((point.prototype.name = 'Point'));

// const funnyGuy = {};
// Object.prototype.name = 'funnyGuy';
// console.log(funnyGuy.name);

const pointA = new Point(4, 7);
console.log(pointA);

//pointA.determinatePoint(6, 8);

console.log(pointA);

point.determinatePoint(5, 6);
console.log(point);
console.log(point.name);
