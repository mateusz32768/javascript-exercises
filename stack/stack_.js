// Przykład stosu wywołania funkcji

function baz() {
  // Stos wywołań to: 'baz' więc źródło
  // wywołania funkcji znajduje zakresie globalnym
  console.log('baz');
  bar(); // <-- źródło wywołania funkcji 'bar
}

function bar() {
  // Stos wywołań to: 'baz' -> 'bar' więć źródło
  // wywołania funkcji znajduje się w 'baz
  console.log('bar');
  foo(); // <-- źródlo wywołania funkcji 'foo'
}

function foo() {
  // Stos wywołań to: 'baz' -> 'bar' -> 'foo'
  // więc źródło wywołania funkcji znajduje się w 'bar'
  console.log('foo');
}

baz(); // <-- Źródło wywołania funkcji 'baz'
