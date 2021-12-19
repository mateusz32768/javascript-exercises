const selector = sel => document.querySelector(sel);

const addListenerToElementDom = (elem, ev, calback) => {
  elem.addEventListener(ev, calback);
};

const btnRandom = selector('.btnRandom');

const displayNumbers = () => {
  const generateRandomNum = () => Math.floor(Math.random() * 44 + 1);

  const createDOMNodes = items =>
    items
      .sort((a, b) => a - b)
      .map(n => `<li>${n},</li>`)
      .join('');

  const elemDOM = selector('.numbers__list');

  const nums = [0, 1, 2, 3, 4, 5].map(n => generateRandomNum());

  console.log(nums);

  elemDOM.innerHTML = createDOMNodes(nums);
};

addListenerToElementDom(btnRandom, 'click', displayNumbers);
