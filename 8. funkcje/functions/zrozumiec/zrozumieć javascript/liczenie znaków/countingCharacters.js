function countBs(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      counter++;
    }
  }

  return counter;
}

//console.log(countBs('Błąd'));

function countChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }

  return counter;
}

console.log(countChar('Kluczowy aspect w odniesieniu do funkcji', 'o'));
