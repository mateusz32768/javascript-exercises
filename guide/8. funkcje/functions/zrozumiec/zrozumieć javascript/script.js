// launch(); error

let launch = function () {
  console.log('Welcome');
};

launch();

launch = function () {
  console.log('Hello');
};

launch();

console.log('Kwadrat liczby 5: ' + square(5));

function square(x) {
  return x * x;
}
