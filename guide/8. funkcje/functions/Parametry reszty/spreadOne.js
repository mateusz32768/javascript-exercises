// To jest poprawiony przykład z książki "JavaScript. Przewodnik ..." str.188 rozdz. 8.3.4. Operator rozciągania w wywołaniach funkcji

function timed(f) {
  return function (...args) { // Zebranie argumentów w parametr resztowy.
    console.log(`Wywołanie funkcji ${f.name}`);
    let startTime = Date.now();
    try {
      // Przekazanie wszystkich argumentów opakowanej funkcji.
      f(...args); // Ponowne rozciągnięcie argumentów.
    }
    finally {
      // Wyświetlenie czasu wykonania kodu przed zwróceniem opakowanej funkcji.
      console.log(`Wyjście z funkcji ${f.name} po ${Date.now() - startTime} ms`);
    }
  };
}
// Wyliczenie sumy liczb od 1 do n metodą brutalnej siły.
function benchmark(n) {
  const sum = [];
  for (let i = 1; i <= n; i++) {
    sum.push(i);
  }
  return sum;
}

// console.log(benchmark(100));

let array = benchmark(100000);

const sum = (...args) => { // parametr rest
  let result = 0;
  for (const arg of args) {
    result += arg;
  }

  return result;
}

console.log(sum(...array)); // operator spread

console.log(sum(2, 4, 5, 6, 7, 8, 9))

timed(sum)(array);

// TODO ponownie przeanalizować póki co misz masz




