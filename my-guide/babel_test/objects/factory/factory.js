
function factory(rangeX, rangeY) {
  const point = {
    coordinateX: Math.floor(Math.random() * rangeX),
    coordinateY: Math.floor(Math.random() * rangeY),

    module: function () {
      return Math.sqrt(Math.pow(this.coordinateX, 2) + Math.pow(this.coordinateY, 2)).toFixed(2);
    }
  }

  return point;
}

const arrayModules = [];

for (let i = 0; i < 10; i++) {
  arrayModules[i] = factory(3, 4).module();
}

console.log(arrayModules);

function factoryOne(coordinateX, coordinateY) {
  return {
    coordinateX: coordinateX,
    coordinateY: coordinateY
  };
}

const pointA = factoryOne(3, 7);
console.log(pointA);
console.log(typeof pointA);

// function Constructor() {
//   // var this = {}; to jest pseudokod
//   this.a = 11;
//   // return this; zwracanie this
// }