// Animacja button-burger navigacji

const btn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const btnItems = [...document.querySelectorAll('.burger-btn__item')];

btn.addEventListener('click', () => {
  nav.classList.toggle('nav--hidden');
  btnItems.forEach(item => item.classList.toggle('burger-btn__item--light'))

  btnItems[0].classList.toggle('turnLeft');
  btnItems[0].classList.toggle('left');

  btnItems[1].classList.toggle('hidden');

  btnItems[2].classList.toggle('turnRight');
  btnItems[2].classList.toggle('right');
})

// Animacja kart

const cards = document.querySelectorAll('.cards__item');
const btnStart = document.querySelector('button:first-child');
const btnReset = document.querySelector('button:last-child');
const images = document.querySelectorAll('.cards__img');
const pictures = ['img/quen-spades.jpg', 'img/queen-club.jpg', 'img/queen-hearts.jpg'];

btnStart.addEventListener('click', () => {
  cards.forEach(item => item.classList.toggle('cards__item--light'));
  images.forEach(item => item.setAttribute('src', 'img/card.jpg'));

  images.forEach(item => {
    item.addEventListener('click', () => {
      item.setAttribute('src', pictures[Math.floor(Math.random() * 3)]);
    })
  })
});

btnReset.addEventListener('click', () => {
  images[0].setAttribute('src', pictures[0]);
  images[1].setAttribute('src', pictures[1]);
  images[2].setAttribute('src', pictures[2]);
})