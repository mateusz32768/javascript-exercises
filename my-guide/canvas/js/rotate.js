var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var i = 0;
let number = setInterval(() => {
  ctx.rotate((i * Math.PI) / 360);
  ctx.fillRect(175, 100, 100, 100);
  i++;
  console.log(i);
  if (i == 10) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillRect(175, 100, 100, 100);
    i = 0;
    clearInterval(number);
  }
}, 1000);
