const set = new Set([1, 3, 5, 7, 9, 11]);

// for(const el of set){
//     console.log(el);
// }

console.log(set.size);

console.log('\n****** zbiór setOne *********')

const setOne = new Set ();


console.log('1.', setOne.size);

setOne.add([1, 3, 5, 7, 9, 11]);

// for (const el of setOne) {
//     console.log(el)
// }

let flag = setOne.delete([1, 3, 5, 7, 9, 11]); // to jest inna tablica od poprzednio dodanej - inny obiekt
console.log('2.', flag);
console.log('3.', setOne.size);

// for (const el of setOne) {
//     console.log(el)
// }

// Aby usunąć tablicę należy podać w metodzie delete referencję do tej tablicy jako jej argument

const  numbers = [1, 3, 5, 7, 9, 11];
setOne.add(numbers);

let i = 0;
for (const el of setOne) {
    console.log(`${++i}.`, el)
}

