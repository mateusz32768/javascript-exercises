function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2

/* Kiedy ist. ob. kontekstu dla odwołania funkcji, zgodnie z regułą wiązania niejawnego
*  to właśnie ten obiekt powinnien być użyty dla wiązania this w danej funkcji.
*  Toteż this.a jest synonimem obj.a
*/

var obj1 = {
  a: 42,
  foo: foo
}

/* 
 * Dla źródła wywołania funkcji znaczenie ma tylko odniesienie do właściwości 
 * obiektu najwyższego (ostatniego) poziomu :
 * 
*/

obj.obj1.foo(); //42
