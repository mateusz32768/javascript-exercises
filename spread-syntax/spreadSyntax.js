/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * Składnia rozprzestrzeniania (...) umożliwia iterację  wyrażenia
 * tablicowego lub ciągu znaków, które mają być rozwinięte w miejscach,
 * w których oczekuje się zero lub więcej argumentów (dla wywołań funkcji)
 * lub elementów (dla literałów tablicowych) lub wyrażenie obiektowe do
 * rozwinięcia w miejsca, w których oczekuje się co najmniej zero par
 * klucz-wartość (dla literałów obiektu).
 * */

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

/*
 * Opis
 * Składnia rozprzestrzeniania może być używana, gdy wszystkie elementy z obiektu
 * lub tablicy muszą być zawarte na jakiejś liście.
 * */

/*
 * Kiedy wywołujemy funkcję, przekazujemy jej wszystkie wartości w tablicy,
 * używając składni rozłożonej i nazwy tablicy — ...liczby.
 * */
