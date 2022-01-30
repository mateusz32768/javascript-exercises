'use strict';

function Point(x, y){
  this.x = x;
  this.y = y;
  this.module = function(){
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}

const pointA = new Point(3, 4);
console.log(pointA.module());
console.log('pointA.prototype:',pointA.prototype);
console.log('pointA.__proto__:',pointA.__proto__);

console.log(pointA);
console.log(Point);
console.log('Point.prototype:', Point.prototype);
console.log('Object.getPrototypeOf(pointA):',Object.getPrototypeOf(pointA));

