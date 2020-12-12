function Point(x, y){
  this.x = x;
  this.y = y;

  this.distance = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2);
  }
}

const pointA = new Point(5, 6);
console.log(pointA.distance());







