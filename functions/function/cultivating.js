// console.log(String(7));

const animals = {
  cows: 7,
  chickens: 11,
  pigs: 12,
};

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(animals) {
  for (const key in animals) {
    if (animals.hasOwnProperty(key)) {
      const element = animals[key];

      console.log(`${zeroPad(element, 4)} ${key}`);
    }
  }
}

printFarmInventory(animals);
