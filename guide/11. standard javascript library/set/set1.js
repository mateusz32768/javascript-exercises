const digitPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const setDigitPrimes = new Set(digitPrimes);

// liczba pierwsza to taka, która dzieli sie sama przez siebie

let primeNumber = 13;
if(setDigitPrimes.has(primeNumber)) {
  console.log(`${primeNumber} jest liczbą pierwszą`);
}

console.log(Math.max(...setDigitPrimes));