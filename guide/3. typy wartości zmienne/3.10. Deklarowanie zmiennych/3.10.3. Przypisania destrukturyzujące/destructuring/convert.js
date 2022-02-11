/* Przypisania destrukuryzujące*/

// Konwersja współrzędnych kartezjańskich [x, y] na biegunowe [r, theta]
const toPolar = (x, y) => [
  Math.sqrt(x * x + y * y).toFixed(2),
  ((Math.atan2(y, x) * 180) / Math.PI).toFixed(2)
];

// Konwersja współrzędnych biegunowych na kartezjańskie
// theta podajemy w radianch
const toCartesian = (r, theta) => [
  (r * Math.cos(theta)).toFixed(2),
  (r * Math.sin(theta)).toFixed(2)
];

let [r, theta] = toPolar(4, 3);
console.log(`r = ${r}; theta = ${theta} deg`);

let [x, y] = toCartesian(5, (37 * Math.PI) / 180);
console.log(`x = ${x}; y = ${y}`);
