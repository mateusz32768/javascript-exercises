function makeSize(size) {
  switch (size) {
    case 'small':
      size = 50;
      break;
    case 'medicore':
      size = 62.5;
      break;
    case 'big':
      size = 100;
      break;
    default:
      size = 62.5;
  }

  console.log(size);

  return function () {
    const root = document.querySelector(':root');
    root.style.fontSize = `${size}%`;
  };
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => makeSize(e.target.id)())
);
