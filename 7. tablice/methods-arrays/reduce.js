/*
 * Metoda reduce() wykonuje dostarczoną przez użytkownika funkcję zwrotną „reducer”
 * na każdym elemencie tablicy, w kolejności, przekazując wartość zwracaną z obliczeń
 * na poprzednim elemencie. Ostatecznym wynikiem uruchomienia reduktora na wszystkich
 * elementach tablicy jest pojedyncza wartość.
 * */

/*
 * Przy pierwszym uruchomieniu wywołania zwrotnego nie ma „zwracanej wartości
 * poprzedniego obliczenia”. Jeśli podana jest wartość inicjująca to  można jej
 * użyć jako wartości początkowej. W przeciwnym razie element tablicy 0 jest
 * używany jako wartość początkowa, a iteracja rozpoczyna się od następnego
 * elementu (indeks 1 zamiast indeksu 0).
 **/

const arr = [1, 2, 3, 4];

const reducer = (prevValue, currentValue) => prevValue + currentValue;

console.log(arr.reduce(reducer));

console.log(arr.reduce((prev, curr) => prev * curr));

const reducerOne = arr.reduce((prev, curr) => prev * curr, 11);

console.log(reducerOne);
