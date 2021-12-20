const selector = sel => document.querySelector(sel)

const range = n => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  return arr
}

const addListenerToElementDom = (elem, ev, calback) => {
  elem.addEventListener(ev, calback)
}

const btnRandom = selector('.btnRandom')
let counter = 0

const displayNumbers = () => {
  const generateRandomNum = () => Math.floor(Math.random() * 44 + 1)

  const createDOMNodes = items =>
    items
      .sort((a, b) => a - b)
      .map(n => `${n} `)
      .join(',')

  const elemDOM = selector('.numbers__list')
  const nums = range(6).map(n => generateRandomNum())
  counter++
  if (counter <= 10) {
    elemDOM.innerHTML += createDOMNodes(nums) + '<br><br>'
  } else {
    elemDOM.innerHTML += 'Koniec'
    btnRandom.setAttribute('disabled', 'disabled')
  }
}

addListenerToElementDom(btnRandom, 'click', displayNumbers)
