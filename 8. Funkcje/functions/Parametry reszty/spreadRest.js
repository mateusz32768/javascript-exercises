
const array = [2, 4, 7, 99, 10];

const sum = (...args) => {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }

  return result;
}

console.log(sum(...array));