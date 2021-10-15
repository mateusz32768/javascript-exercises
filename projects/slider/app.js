const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');

const img = document.querySelector('img');

const imgs = document.querySelectorAll('.pictures img');

const images = [
  'images/picture1.jpg',
  'images/picture2.jpg',
  'images/picture3.jpg',
  'images/picture4.jpg',
  'images/picture5.jpg',
]

let counter = 0

btnLeft.addEventListener('click', () => {
 
  counter++;
  if (counter < images.length) {
    img.setAttribute('src', images[counter]);
    imgs[counter].classList.add('light');
    imgs[counter - 1].classList.remove('light')
  
  } else {
    counter = 0;
    img.setAttribute('src', images[counter]);
    imgs[counter].classList.add('light');
    imgs[images.length -1].classList.remove('light');
  }
})

btnRight.addEventListener('click', () => {
  counter++;
  if (counter < images.length) {
    img.setAttribute('src', images[counter]);
    imgs[counter].classList.add('light');
    imgs[counter - 1].classList.remove('light')
    
  } else {
    counter = 0;
    img.setAttribute('src', images[counter]);
    imgs[counter].classList.add('light');
    imgs[images.length -1].classList.remove('light');
  }
})