console.log('Metody');
let square = {
  side: 10,
  area: function (side) {
    if (side !== undefined) {
      return side * side;
    } else {
      return this.side * this.side;
    }
  },
};

console.log(square.area(7));
console.log(square.area());



