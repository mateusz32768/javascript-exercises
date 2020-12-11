function foo() {
  console.log(this);
  console.log(this.a);
}

var a = 2;

foo();
