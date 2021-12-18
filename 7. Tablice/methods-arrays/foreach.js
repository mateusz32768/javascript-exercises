/*The forEach() method executes a provided function once for each array element.
Metoda forEach() wykonuje dostarczoną funkcję raz dla każdego elementu tablicy.*/

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
arr.forEach((elem, index) => console.log(`${index}. ${elem}`));
console.log(arr);

const arrMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let map = arrMap.map(elem => {
  return elem * elem;
});

console.log(arr);
console.log(map);
map = arrMap.map(elem => elem);

console.log(map);

console.log('**************************\n\n');

let counter = -1;
arrMap.forEach(elem => {
  // console.log(elem === index);
  console.log(elem === ++counter);
});
