function  foo(num) {
  console.log(`foo: ${num}`);
  // Próba określenia liczby wywołwań funkcji foo()
  foo.count++;
}

foo.count = 0;

for(let i = 0; i < 4; i++){
  foo(i);
}

console.log(foo.count);
