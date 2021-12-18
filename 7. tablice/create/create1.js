// Vide plik create.js

/*
* Tworzenie tablic za pomocą konstruktora Array()
*
* elementN – tablica JavaScript jest inicjowana z podanymi elementami, z wyjątkiem przypadku, gdy pojedynczy argument
* jest przekazywany do konstruktora Array, a ten argument jest liczbą (patrz parametr arrayLength poniżej). Zauważ, że
* ten szczególny przypadek dotyczy tylko tablic JavaScript utworzonych za pomocą konstruktora Array, a nie literałów
* tablicowych utworzonych za pomocą składni nawiasów.
* arrayLength – Jeśli jedynym argumentem przekazanym do konstruktora Array jest liczba całkowita z przedziału od 0 do
* 2 32 -1 (włącznie), to zwraca nową tablicę JavaScript z właściwością length ustawioną na tę liczbę
* (Uwaga: oznacza to tablicę pustych miejsc arrayLength , a nie sloty z rzeczywistymi niezdefiniowanymi wartościami).
* Jeśli argumentem jest inna liczba, zgłaszany jest wyjątek RangeError.
*/

console.log(`***** C. Tworzenie tablicy za pomocą konstruktora *****`);

const table = new Array(); // Tworzymy pustą tablicę

const tableA = new Array(10);

const tableB = new Array(5, 6, 7, 8, 'test1', 'test2'); // Prościej jest użyć literału tablicowego

console.log(`1.`, table);
console.log(`2.`, tableA);
console.log(`3. ${tableB}`);

// Tworzenie tablicy za pomocą metod fabrycznych Array.of() i Array.from().

console.log(`***** D. Tworzenie tablicy za pomocą metody fabrycznej Array.of() *****`);

const arrayOne = Array.of() // => []; funkcja bez argumentów zwracająca pustą tablicę.
const arrayTwo = Array.of(10) // => [10]; utworzenie tablicy z jednym liczbowym elementem.
const arrayThree = Array.of(1,2,3) // => [1, 2, 3]

console.log(`4.`, arrayOne);
console.log(`5.`, arrayTwo);
console.log(`6`, arrayThree);

/*
*
* Metoda statyczna Array.from() tworzy nową, płytko skopiowaną instancję Array z obiektu podobnego do
* tablicy lub obiektu iterowalnego.
*
* */

console.log(`***** E. Za pomocą metody fabrycznej Array.from() *****`)

const copy = Array.from(tableB);

console.log(`7. copy:`, tableB);



