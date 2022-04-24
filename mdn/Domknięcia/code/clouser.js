// Przykład zasięgu leksykalnego zmiennej name
// została zdefiniowana w bloku i tutaj jest dostępna
// od miejsca zadeklarowaia do końca bloku

function init() {
  var name = 'Marek';

  function displayName() {
    console.log(name);
  }

  displayName();
}

init();

// Przykład zamknięcia

function makeFunc() {
  var name = 'Marek R.';
  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();

//

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(5);

console.log(add5);
console.log(add5(5));
console.log(add10(5));
