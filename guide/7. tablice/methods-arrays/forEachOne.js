let data = [1, 2, 3, 4, 5],
  sum = 0;

data.forEach(value => (sum += value));
console.log(sum);

data.forEach((value, index, temp) => (temp[index] = value + 1));
console.log(data);
