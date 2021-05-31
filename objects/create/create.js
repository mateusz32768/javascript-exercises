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

