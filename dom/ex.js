const caption = document.getElementById('caption');
const str = ['H', 'E', 'L', 'L', 'O', '\13', 'W', 'O', 'R', 'L', 'D', '!'];

let count = 0;

let interval = setInterval(() => {
  if (count !== str.length) {
    caption.innerText += str.shift();
  } else {
    clearInterval(interval);
  }
}, 300);
