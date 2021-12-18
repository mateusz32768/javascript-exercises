const sum = (...items) => {
  let result = 0;
  items.forEach((item) => {
    result += item;
  });

  return result;
}

console.log(sum(3, 4, 5, 6));
