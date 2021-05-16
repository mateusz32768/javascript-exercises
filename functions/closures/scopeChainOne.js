var global = 1;

function outer() {
  var outer_local = 2;

  function inner() {
    var inner_local = 3;
    return outer_local + inner_local + global;
  }

  return inner();
}

console.log(outer()); // 6 -funkcja inner ma dostęp do wszystkich zmiennych
