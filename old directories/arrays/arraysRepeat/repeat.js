// Tablice są obiektami i posiadają właściwości oraz metody
// tablice jedno i wielowymiarowe

var numbers = []; // deklaracja tablicy -literał tablicowy

numbers = [1, 3, 4, 5];
console.log(numbers[3]); // 5
console.log(numbers.length); // 4
console.log(numbers['length']); // 4 - tak też można ale się nie zaleca 

var things = [{ name: 'Margaret' }, 2, 2 + 8];
console.log(things);
console.log(things[0].name);

var myArr = [[2, 5, 8], [11, 22, 33]];

console.log(myArr); // [ [ 2, 5, 8 ], [ 11, 22, 33 ] ]

console.log(myArr[0]); // [2, 5, 8]
console.log(myArr[1]); // [11, 12, 33]

console.log(myArr[1][1]);

var arrays = [[2, 3, 4], [4, 2, 1, ['Jan', 'Piotr']]];

console.log(arrays[1][3]); // ['Jan', 'Piotr']
console.log(typeof arrays[1][3]); // object

console.log(arrays[1][3][0]);


// 5
// 4
// 4
// [ { name: 'Margaret' }, 2, 10 ]
// Margaret
// [ [ 2, 5, 8 ], [ 11, 22, 33 ] ]
// [ 2, 5, 8 ]
// [ 11, 22, 33 ]
// 22
// [ 'Jan', 'Piotr' ]
// object
// Jan