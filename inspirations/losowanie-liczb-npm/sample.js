// Rozkminianie kodu Mikołaja
const lodash = require('lodash');

const generateRandomNum = () => Math.floor(Math.random() * 100 + 1);

const NUMS = {
  odd: [],
  even: []
};

const arr_1 = lodash.range(0, 21);
// console.log(arr_1);

const arr_2 = arr_1.map((n) => generateRandomNum());
// console.log(arr_2);

const { odd, even } = arr_2.reduce((acc, n) => {
  const key = n % 2 ? 'odd' : 'even';
  console.log(acc);
  return {
    ...acc,
    [key]: [...acc[key], n]
  };
}, NUMS);
