for (let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

console.log('********************************');
repeat(4, console.log);

const labels = [];
repeat(5, i => labels.push(`Moduł ${i + 1}`));
console.log(labels);

function foo(param, fun) {
  return param * fun(param);
}

console.log(foo(5, n => n * n));