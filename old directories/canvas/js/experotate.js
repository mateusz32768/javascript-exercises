var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillRect(175, 100, 100, 100);

ctx.translate(-20, -20);
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(175, 100, 100, 100);
