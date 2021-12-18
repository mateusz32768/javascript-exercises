const generateRandomNum = () => Math.floor(Math.random() * 44 + 1);

const NUMS = {
  odd: [],
  even: [],
};

const createDOMNodes = nums =>
  nums
    .sort((a, b) => a - b)
    .map(n => `<li>${n}</li>`)
    .join('');

const qs = selector => document.querySelector(selector);

const oddsDOM = qs('.odd');
const evensDOM = qs('.even');

const { odd, even } = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]
  .map(n => generateRandomNum())
  .reduce((acc, n) => {
    const key = n % 2 ? 'odd' : 'even';
    return {
      ...acc,
      [key]: [...acc[key], n],
    };
  }, NUMS);

oddsDOM.innerHTML = createDOMNodes(odd);
evensDOM.innerHTML = createDOMNodes(even);
