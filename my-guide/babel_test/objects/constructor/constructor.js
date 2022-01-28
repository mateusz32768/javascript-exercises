const header = document.querySelector('.header');
header.innerHTML = 'Obiekty';

const point = {
  coordinateX: 3,
  coordinateY: 4,

  determinatePoint(x, y) {
    this.coordinateX = x;
    this.coordinateY = y;
  }
}

const td = document.getElementsByTagName('td');
console.log(td);

console.log(td.item(0));

td.item(0).innerHTML = point.coordinateX.toString();

console.log(point.constructor);

function Point(x, y) {
  this.coordinateX = x;
  this.coordinateY = y;

  this.module = function () {
    return Math.sqrt(
      Math.pow(this.coordinateX, 2) + Math.pow(this.coordinateY, 2)
    ).toFixed(2);
  }
}

const pointA = new Point(3, 4);
const pointB = new Point(4, 3);

console.log(pointA.module());
console.log(pointB.module());

const pointC = new pointA.constructor(2, 3);
console.log(pointC.module());
