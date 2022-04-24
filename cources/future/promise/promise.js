const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Failed!');
    resolve('Success!');
  }, 1000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
