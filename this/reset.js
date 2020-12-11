const btn = document.getElementById('reset');
const script = document.getElementById('script');

const arrSource = ['thisone.js', '', 'thistwo.js', 'thisthree.js'];

let counter = 0;

btn.addEventListener('click', () => {
  if (counter < 3) {
    script.setAttribute('src', arrSource[counter]);
    counter++;
  } else {
    counter = 0;
  }

  console.log(`Klik: ${counter}`);
});
