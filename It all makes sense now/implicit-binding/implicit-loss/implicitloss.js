function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
}

var bar = obj.foo;

var a = 'oops, global';

bar();

/* 
 * Źródłem wywołania funkcji foo jest bar(), które jest samodzielnym wywołaniem
 * i ma tu zastosowanie wiązanie domyślne
*/