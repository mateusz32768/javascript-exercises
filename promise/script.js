const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('to już');
  }, 5000);
});

promise.then(value => {
  console.log(value);
});

const p = new Promise((resolve, reject) => resolve('Ok!'));

p.then(value => console.log(value));
