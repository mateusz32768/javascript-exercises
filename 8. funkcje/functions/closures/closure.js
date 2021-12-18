
var a = 'zmienna globalna';

var F = function () {
  var b = 'zmienna lokalna';

  var N = function () {
    var c = 'wewnętrzna lokalna';
  };
};

// Gdy N wydostanie z zakresu F i trafi do przestrzeni globalnej 
// będziemy mieli do czynienia z domknięciem.
// Funkcja N zamknie swój zakres i zabierze go do przestrzeni globalnej. 