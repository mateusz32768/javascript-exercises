// 3.10.3 Przypisanie destrukturyzacyjne

let [x, y] = [3, 6, 8];
console.log(`x = ${x}, y = ${y}`);

[x, y] = [x++, y++];
console.log(`x = ${x}, y = ${y}`);

[x, y] = [++x, ++y];
console.log(`x = ${x}, y = ${y}`);

let [a, ...b] = [3, 5, 7, 8, 9];

console.log(a);
console.log(b);


// Konwersja współrzędnych kartezjańskich [x, y] na biegunowe [r, theta]

// function toPolar(x, y) {
//   return [(Math.sqrt(x * x + y * y)).toFixed(2), (Math.atan2(y, x) * 180 / Math.PI).toFixed(2)];
// }

// // Konwersja współrzędnych biegunowych na kartezjańskie

// function toCartesian(r, theta) {
//   return [(r * Math.cos(theta)).toFixed(2), (r * Math.sin(theta)).toFixed(2)];
// }

// let [r, theta] = toPolar(3, 4);

// console.log(`r = ${r}; theta = ${theta} deg`);

// let [x, y] = toCartesian(5, 45);

// console.log(`x = ${x}; y = ${y}`);