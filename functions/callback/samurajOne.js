let stop = setInterval(
  () => console.log('Joe Biden 46. prezydentem USA'),
  1000
);

clearInterval(stop);

setTimeout(foo, 1000, 'Hejka, hejka', 'Welcome');

function foo(str1, str2) {
  console.log(str1);
  console.log(str2);
}

let pause = setInterval((x, y) => {
  return console.log(x + y)
}, 1000, 3, 8);

clearInterval(pause);
