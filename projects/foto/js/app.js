const nav = document.querySelector('.navigation');
const btn = document.querySelector('.navigation__btn');
const navElements = document.querySelectorAll('.navigation__elem');

btn.addEventListener('click', () => {
  nav.classList.toggle('navigation--show');
  navElements[1].classList.toggle('forward');
  navElements[2].classList.toggle('forward');
})