function foo(str) {
  console.log(`foo: ${str}`);
  // Próba określemia liczby wywołań funkcji foo()
  data.count++;
}

const data = {
  count: 0,
};

for (let i = 0; i < 5; i++) {
  console.log(`Wywołanie funkcji foo ${i} raz(y)`);
  foo("Welcome");
}

console.log(`Funkcja foo wywoła się ${data.count} razy`);