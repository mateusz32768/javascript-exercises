function uniqArray(arr) {
  const set = new Set(arr);
  const newArr = [...set];
  
  return newArr;
}

console.log(uniqArray([1, 1, 1]));