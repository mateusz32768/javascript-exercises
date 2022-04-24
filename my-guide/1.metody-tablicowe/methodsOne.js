const arr = ['a', 'b', 'c', 'd', 'e'];
let result = arr.slice(1);
console.log(result); //  [ 'b', 'c', 'd', 'e' ]
result = arr.slice(-1); //
console.log(result); //  ['e']
result = arr.slice(0, 2);
console.log(result); // ['a', 'b']

result = arr.push('f', 'g');
console.log(result); // 7
console.log(arr); //  ['a', 'b', 'c', 'd', 'e', 'f', 'g' ]

result = arr.pop(); // g
console.log(result); // g
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

result = arr.shift(); // 'a'
console.log(result);
console.log(arr); // ['b', 'c', 'd', 'e', 'f']

result = arr.unshift('1'); // => 6
console.log(result); // 6
console.log(arr); // [ '1', 'b', 'c', 'd', 'e', 'f' ]

result = arr.concat('h', 'i');
console.log(result); // [ '1', 'b', 'c', 'd', 'e', 'f' , 'h', 'i']
console.log(arr); // [ '1', 'b', 'c', 'd', 'e', 'f' ]

result = arr.join('');
console.log(result); // 1bcdef
console.log(arr); // [ '1', 'b', 'c', 'd', 'e', 'f' ]

arr.shift();
console.log(arr); // [ 'b', 'c', 'd', 'e', 'f' ]

result = arr.map((item) => item.toUpperCase());
console.log(result); // [ 'B', 'C', 'D', 'E', 'F' ]
console.log(arr); // [ 'b', 'c', 'd', 'e', 'f' ]
