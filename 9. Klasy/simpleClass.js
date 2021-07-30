// Funkcja fabryczna zwracająca nowy obiekt reprezentujący zakres wartości.
function range(from, to) {
  let r = Object.create(range.methods);

  r.from = from;
  r.to = to;

  return r;
}
// Poniższy prototyp definiuje metody dziedziczone przez wszystkie obiekty.
range.methods = {
  // Metoda zwracająca wartość true, jeżeli x zawiera się w zakresie, lub false w przeciwnym razie.
  // Metoda operuje na zakresach wartości tekstowych, liczbowych i typu Date.
  includes(x) { return this.from <= x && x <= this.to; },
  // Funkcja generatora, dzięki której instancje klasy można iterować.
  // Zwróć uwagę, że dotyczy to tylko zakresów liczbowych.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // Metoda zwracająca ciąg znaków reprezentujący zakres.
  toString() { return "(" + this.from + "..." + this.to + ")"; }
};
// Przykład użycia obiektu range.
let r = range(1, 3);      // Utworzenie obiektu.
r.includes(2);            // => true: liczba 2 zawiera się w zakresie.
r.toString() ;            // => "(1…3)"
[...r]                   // => [1, 2, 3]; przekształcenie obiektu w tablicę za pomocą iteratora.