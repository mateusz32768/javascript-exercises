const point = {
  x: 3,
  y: 4,

  module: function(){
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(point.module());

point.x = 5;
point.y = 9;

console.log(point.module().toFixed(2));

console.log('************** Object.create() *****************');

let pointA = Object.create(point);

pointA.x = 8;
pointA.y = 12;

console.log(pointA.module().toFixed(2));
console.log(point.isPrototypeOf(pointA));

const pointB = Object.create(pointA);
pointB.x = 11;
pointB.y = 22;
console.log(pointB.module().toFixed(2));
console.log(point.isPrototypeOf(pointB));


console.log('************ Prototypy ******************');
console.log(point.prototype);
console.log(point.__proto__);
console.log(Object.prototype);
console.log(Object.prototype.isPrototypeOf(point));

