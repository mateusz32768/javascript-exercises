// Tworzymy pusty obiekt, aby dodawać do niego właściwości i metody

const point = {};

point.toCartesian = function() {
  return {
    x: this.radialCoordinate * Math.cos(this.angularCoordinate),
    y: this.radialCoordinate * Math.sin(this.angularCoordinate)
  };
};

point.radialCoordinate = 30;
point.angularCoordinate = 45;
point.x = point.toCartesian().x;
point.y = point.toCartesian().y;

console.log(point);
console.log(point.x);
console.log(point.y);



let pointA = {};
pointA.x = 0;
pointA.y = 0;
pointA = point.toCartesian();

console.log(pointA);
console.log(pointA.x);
console.log(pointA.y);





