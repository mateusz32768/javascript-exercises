/* Przypisania destrukuryzujące*/

// Konwersja współrzędnych kartezjańskich [x, y] na biegunowe [r, theta]

function toPolar(x, y) {
  return [(Math.sqrt(x * x + y * y)).toFixed(2), (Math.atan2(y, x) * 180 / Math.PI).toFixed(2)];
}

// Konwersja współrzędnych biegunowych na kartezjańskie

function toCartesian(r, theta) {
  return r * Math.cos(theta), r.Math.sin(theta);
}

let [r, theta] = toPolar(4, 4);

console.log(`r = ${r}; theta = ${theta} deg`);


