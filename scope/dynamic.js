let a = 2;
function bar() {
  console.log(a);
}
function foo() {
  let a = 1;
  bar();
}
('use lex scope');
foo(); // 2
('use dynamic scope');
foo(); // 1
