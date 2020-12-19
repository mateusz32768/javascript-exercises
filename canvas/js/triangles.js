var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var offset = 5;

ctx.strokeStyle = 'gray';
ctx.lineWidth = 2;

function displayTriangles() {
  for (var i = 1; i <= 30; i++) {
    ctx.beginPath();
    ctx.moveTo(180 + offset * i, 10 + offset * i);
    ctx.lineTo(120 + offset * i, 100 + offset * i);
    ctx.lineTo(240 + offset * i, 100 + offset * i);
    ctx.closePath();
    ctx.stroke();
  }
}

setInterval(displayTriangles, 2000);

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 3000);
