// Definicja i wywołanie funkcji sprawdzającej, czy obwiązuje tryb ścisły:

'use strict';

console.log(this);

const strict = (
  function () {
    console.log(this);
    return !this;
  })();

console.log(strict);
