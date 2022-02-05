var inner; // element zastępczy
var F = function () {
  var b = 'zmienna lokalna';
  var N = function () {
    return b;
  }

  inner = N;
};

F();

console.log(inner()); // zmienna lokalna