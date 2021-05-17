/* Przypisania destrukuryzujące

*/

// Konwersja współrzędnych kartezjańskich [x, y] na biegunowe [r, theta]

function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Konwersja współrzędnych biegunowych na kartezjańskie

function toCartesian(r, theta) {
  return r * Math.cos(theta), r.Math.sin(theta);
}

let [r, theta] = toPolar(3, 4);

console.log(r);
console.log(theta);

[r, theta] = [++r, ++theta];

console.log(r);
console.log(theta);

console.log(r);
console.log(theta);
