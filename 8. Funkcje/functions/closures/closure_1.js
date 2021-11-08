var a = 'zmienna globalna';

var F = function () {
  var b = 'zmienna lokalna';

  var N = function () {
    var c = 'wewnętrzna lokalna';
    return b;
  }

  return N;
}

var inner = F();

console.log(inner()); // Funkcja globalna inner ma dostęp 
// do prywatnej przestrzeni F