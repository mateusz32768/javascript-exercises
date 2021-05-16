const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

context.fillStyle = 'crimson';
context.fillRect(175, 100, 100, 100);

context.beginPath();
context.strokeStyle = 'red';
context.moveTo(0, 300);
context.lineTo(450, 0);
context.stroke();
