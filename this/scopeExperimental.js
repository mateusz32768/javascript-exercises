function foo() {
  console.log(this);
  console.log(this.a)
  // console.log(global);
  console.log(window)
  bar();
}

function bar () {
  console.log(this)
  console.log(this.a);
}

var a = 2;

foo();