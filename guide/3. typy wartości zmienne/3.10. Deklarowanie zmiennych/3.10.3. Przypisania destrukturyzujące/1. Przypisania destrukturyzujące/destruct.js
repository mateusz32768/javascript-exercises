let o = { x: 1, y: 2 }; // Iterowany obiekt.
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); // Wyświetlany wynik: "x 1" i "y 2".
}

// To samo co const sin = Math.sin, cos = Math.cos, tan = Math.tan
const { sin, cos, tan, sqrt, pow } = Math;

console.log(sqrt(25));
console.log(pow(2, 5));
console.log(sin(Math.PI / 2));
