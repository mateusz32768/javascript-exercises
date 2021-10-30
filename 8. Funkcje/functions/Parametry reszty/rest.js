const arrayTest = [4, 5, 333, 9, 5, 11, 33, 23, 405, 99, 56, 29, 77, 88];


function max(first = -Infinity, ...rest) { // operator rest
  let maxValue = first; // Początkowe założenie, że największy jest pierwszy argument.
  // Analiza pozostałych argumentów i wyszukiwanie większych wartości.
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  // Zwrócenie największego argumentu.
  return maxValue;
}


console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6)); // => 1000

function min(first = Infinity, ...rest) {
  let minValue = first;

  for (let n of rest) {
    if (n < minValue) {
      minValue = n;
    }
  }

  return minValue;
}



console.log(min(1, 10, 100, 2, 3, 1000, 4, 5, 6));

console.log(max(...arrayTest)); // operator spread
console.log(min(...arrayTest));