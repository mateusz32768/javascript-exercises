const names = ['Adam', 'Jerzy', 'Ignacy', 'Juliusz', 'Aleksander'];
const numbers = [2, 4, 6, 9, 11, 12];

let namesOne = names.map((name) => name.toUpperCase());
console.log('1.', namesOne);
namesOne = names.map((name, i) => `${i + 1} ${name.toUpperCase()} `);
console.log('2. ', namesOne);

// function foo() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
//
// foo('a', 'b', 'c', 'd');

// TODO: napisać funkcję, która by była podobna do funkcji React.create()
// function reactLike(arg1, argObj, arg2, arg3, arg4) {
//   return {type: 'arg1', argObj, }
// }

let numbersOne = numbers.map((number, i) => number * i);
console.log('3. ', numbersOne);
