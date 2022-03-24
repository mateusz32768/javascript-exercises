function uniqArray(arr) {
  const set = new Set(arr);
  return [...set];
}

console.log(uniqArray([1, 1, 1]));
