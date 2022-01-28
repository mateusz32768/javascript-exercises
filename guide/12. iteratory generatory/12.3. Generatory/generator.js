// Funkcja generatora zwracająca zbiór jednocyfrowych liczb pierwszych.

function* oneDigitPrimes() { // Wywołanie tej funkcji nie powoduje wykonania jej kodu,
  yield 2; // Tylko zwrócenie obiektu generatora. Wywołanie metody
  yield 3; // next()generatora powoduje wykonanie kodu do
  yield 5; // momentu, aż instrukcja yield zwróci wynikowy obiekt,
  yield 7; // który ma zwrócić metoda next().
}

// Wywołując funkcję generatora, uzyskujemy obiekt generatora.
let primes = oneDigitPrimes();

// Generator jest obiektem iterującym dostarczane wartości.
primes.next().value // => 2
primes.next().value // => 3
primes.next().value // => 5
primes.next().value // => 7
primes.next().done // => true

// Generator zawiera metodę Symbol.iterator, dzięki której jest iterowalny.
primes[Symbol.iterator]() // => primes

// Z generatora można korzystać tak samo jak z każdego iterowalnego obiektu.
const digits = [...oneDigitPrimes()] // => [2,3,5,7]

let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
sum // => 17
