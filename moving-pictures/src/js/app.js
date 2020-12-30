const btn = document.getElementById('btn_gtr');
const pictures = [
  'picture_one',
  'picture_two',
  'picture_three',
  'picture_four',
  'picture_five',
  // 'picture_six',
  // 'picture_seven',
  // 'picture_eight',
  // 'picture_nine',
  // 'picture_ten',
];

const source = [
  'picture_one.jpg',
  'picture_two.jpg',
  'picture_three.jpg',
  'picture_four.jpg',
  'picture_five.jpg',
];

const PARTIAL_PATH = '../images/';
const JPG = '.jpg';
let counter = 1;

btn.addEventListener('click', () => {
  for (let i = 0; i < pictures.length; i++) {
    const pictureID = document.getElementById(pictures[i]);
    if (i < pictures.length - 1) {
      pictureID.setAttribute('src', `${PARTIAL_PATH}${pictures[i + 1]}${JPG}`);
    } else {
      pictureID.setAttribute('src', `${PARTIAL_PATH}${pictures[0]}${JPG}`);
    }
  }
  // changePictures(counter);
  // counter++;
});

function changePictures(counter) {
  for (let i = 0; i < pictures.length; i++) {
    const pictureID = document.getElementById(pictures[i]);
    if (i < pictures.length - counter) {
      pictureID.setAttribute(
        'src',
        `${PARTIAL_PATH}${pictures[i + counter]}${JPG}`
      );
    } else {
      pictureID.setAttribute(
        'src',
        `${PARTIAL_PATH}${pictures[counter - 1]}${JPG}`
      );
    }
  }
}
