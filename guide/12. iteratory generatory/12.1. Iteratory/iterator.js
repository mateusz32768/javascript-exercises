const iterable = [55, 66, 77, 88, 99];
const iterator = iterable[Symbol.iterator]();

for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}
