// Funkcja dołączająca do tablicy a nazwy wyliczalnych właściwości obiektu o
// i zwracająca tę tablicę. Jeżeli tablica nie zostanie określona, funkcja utworzy nową.
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // Utworzenie nowej tablicy, jeżeli została nie określona.
  for (let property in o) a.push(property);
  return a;
}

// Funkcję getPropertyNames() można wywoływać z jednym lub dwoma argumentami:
let o = { x: 1 }, p = { y: 2, z: 3 }; // Dwa testowe obiekty.
let a = getPropertyNames(o); // a == ["x"]; umieszczenie właściwości obiektu o w nowej tablicy.
console.log(a);
console.log(getPropertyNames(p, a)); // a == ["x","y","z"]; dołączenie właściwości obiektu p do podanej tablicy.

// Funkcja zwracająca obiekt reprezentujący wymiary prostokąta
// Jeżeli określona jest tylko szerokość, to przyjmowana jest wysokość
// dwukrotnie większa od szerokości.

const rectangle = (width, height = width * 2) => ({ width, height });
rectangle(1) // => { width: 1, height: 2 }

console.log(rectangle(2));