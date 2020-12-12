function foo(str) {
  console.log(`Funkcja foo: ${str}`);
  /*
  * Próba określenia liczby wywołwań funkcji foo().
  * Uwaga: 'this' to teraz naprawdę JEST 'foo',
  * co wynika ze sposobu wywołania 'foo' (patrz opis poniżej)
  * */
  this.count++;
}
foo.count = 0;

for (let i = 0; i < 4; i++){
  console.log(`Wywołanie funkcji foo ${i + 1} raz(y)`);
  /*
  * Używając 'call(...)', mamy pewność, że 'this'
  * odwołuje się do obiektu funkcji ('foo')
  * */
  foo.call(foo, "welcome");
}

console.log(`Funkcja foo wywoła się ${foo.count} razy`);
