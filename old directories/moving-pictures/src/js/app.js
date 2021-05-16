'use strict';

const btn = document.getElementById('btn_gtr');

const pictures = [
  'picture_one',
  'picture_two',
  'picture_three',
  'picture_four',
  'picture_five',
];

const source = [
  '../images/picture_one.jpg',
  '../images/picture_two.jpg',
  '../images/picture_three.jpg',
  '../images/picture_four.jpg',
  '../images/picture_five.jpg',
];

const pictureID = [];

for (let i = 0; i < pictures.length; i++) {
  pictureID.push(document.getElementById(pictures[i]));
}

changePictures_4();

let counter = 0;

btn.addEventListener('click', () => {
  switch (counter) {
    case 0:
      changePictures_0();
      break;
    case 1:
      changePictures_1();
      break;
    case 2:
      changePictures_2();
      break;
    case 3:
      changePictures_3();
      break;
    case 4:
      changePictures_4();
      break;
  }

  counter++;

  if (counter == 5) {
    counter = 0;
  }
});

function changePictures_4() {
  // pictureID[0].setAttribute('src', source[0]);
  // pictureID[1].setAttribute('src', source[1]);
  // pictureID[2].setAttribute('src', source[2]);
  // pictureID[3].setAttribute('src', source[3]);
  // pictureID[4].setAttribute('src', source[4]);

  for (let picture of pictures) {
    picture.setAttribute('src', source.shift());
  }
}

console.log(source);

let template = source.shift();
source[4] = template;

console.log(source);

function changePictures_0() {
  console.log(source);
  // pictureID[0].setAttribute('src', source[1]);
  // pictureID[1].setAttribute('src', source[2]);
  // pictureID[2].setAttribute('src', source[3]);
  // pictureID[3].setAttribute('src', source[4]);
  // pictureID[4].setAttribute('src', source[0]);

  for (let picture of pictures) {
    picture.setAttribute('src', source.shift());
  }

  // let k = 0;
  // for (let i = 0, k = 1; i < pictureID.length; i++, k++) {
  //   if (k != 5) {
  //     pictureID[i].setAttribute('src', source[k]);
  //   }

  //   if (k == 5) {
  //     pictureID[i].setAttribute('src', source[0]);
  //   }
  // }
}

function changePictures_1() {
  pictureID[0].setAttribute('src', source[2]);
  pictureID[1].setAttribute('src', source[3]);
  pictureID[2].setAttribute('src', source[4]);
  pictureID[3].setAttribute('src', source[0]);
  pictureID[4].setAttribute('src', source[1]);
}

function changePictures_2() {
  pictureID[0].setAttribute('src', source[3]);
  pictureID[1].setAttribute('src', source[4]);
  pictureID[2].setAttribute('src', source[0]);
  pictureID[3].setAttribute('src', source[1]);
  pictureID[4].setAttribute('src', source[2]);
}

function changePictures_3() {
  pictureID[0].setAttribute('src', source[4]);
  pictureID[1].setAttribute('src', source[0]);
  pictureID[2].setAttribute('src', source[1]);
  pictureID[3].setAttribute('src', source[2]);
  pictureID[4].setAttribute('src', source[3]);
}

function changePictures_4() {
  pictureID[0].setAttribute('src', source[0]);
  pictureID[1].setAttribute('src', source[1]);
  pictureID[2].setAttribute('src', source[2]);
  pictureID[3].setAttribute('src', source[3]);
  pictureID[4].setAttribute('src', source[4]);
}

// let k = 0;
// for (let i = 0, k = 2; i < pictureID.length; i++, k++) {
//   if (k != 5) {
//     pictureID[i].setAttribute('src', source[k]);
//   }

//   if (k == 5) {
//     pictureID[i].setAttribute('src', source[0]);
//   }
// }
