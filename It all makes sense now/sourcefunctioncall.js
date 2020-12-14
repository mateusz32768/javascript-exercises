function baz() {
  // Stos wywołań to : ' baz ', więc źródło wywołania
// funkcji znajduje się w zakresie globalnym .
  console.log("baz");
  bar(); // <-- Źródło wywołania funkcji ' bar '.
}

function bar() {
  // Stos wywołań to : ' baz ' -> ' bar ', więc źródło wywołania // funkcji znajduje się w ' baz '.
  console.log("bar");
  foo(); // <-- Źródło wywołania funkcji ' foo '.
}

function foo() {
  // Stos wywołań to : ' baz ' -> ' bar ' -> ' foo ',
 // więc źródło wywołania funkcji znajduje się w ' bar '.
  console.log("foo");
}

baz(); // <-- Źródło wywołania funkcji ' baz '.