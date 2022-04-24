// let result = '';
//
// setTimeout(() => {
//   result = 'Przyszło!';
// }, 1000);
//
// console.log(result + 'napewno');

const getData = (url, callback) => {
  setTimeout(() => {
    callback('Przyszło');
  }, 1000);
};

getData('test/url', result => {
  console.log(result);
});
