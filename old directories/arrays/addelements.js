const arr = [];

arr[0] = 'Kasia' // ['Kasia']
arr[1] = 'Tomek' // ['Kasia', 'Tomek']

arr[10] = 33;

console.log(arr);
console.log(arr.length);
console.log(arr[9])
console.log(arr[10]);
console.log(arr[11]); // w innych językach tu by był błąd przekroczenia zakresu tablicy

console.log(arr[arr.length] = 'Piotr');
console.log(arr.length);

arr.push('Monika'); // metoda push()
arr.unshift('Patryk'); // metoda unshift()

console.log(arr);
console.log(arr.length);

// [ 'Kasia', 'Tomek', <8 empty items>, 33 ]
// 11
// undefined
// 33
// undefined
// Piotr
// 12
// [ 'Patryk',
//   'Kasia',
//   'Tomek',
//   <8 empty items>,
//   33,
//   'Piotr',
//   'Monika' ]
// 14

var women = ['Krystyna', 'Maria', 'Zofia'];
women[women.length] = 'Margaret';

women.push('Monika');
women[0] = 'Anna';
women.unshift('Patrycja');

console.log(women); //[ 'Patrycja', 'Anna', 'Maria', 'Zofia', 'Margaret', 'Monika' ]

// tak dodamy do tablicy obiekty

// women.polish = 'Zuzanna';
// women.english = 'Sylvia';

// console.log(women);
// [ 'Patrycja',
//   'Anna',
//   'Maria',
//   'Zofia',
//   'Margaret',
//   'Monika',
//   polish: 'Zuzanna',
//   english: 'Sylvia' ]

//console.log(women[6]) // undefined

// women.national = {
//   polish: 'Zuzann',
//   english: 'Sylvia',
// };

// console.log(women);

// console.log(women[6]);

women[6] = {
  polish: 'Zuzann',
  english: 'Sylvia',
}

console.log(women);

// [ 'Patrycja',
//   'Anna',
//   'Maria',
//   'Zofia',
//   'Margaret',
//   'Monika',
//   { polish: 'Zuzann', english: 'Sylvia' } ]

console.log(women[6]);

// { polish: 'Zuzann', english: 'Sylvia' }

console.log(women[7] = 'Julia'); // Julia
console.log(women);

// [ 'Patrycja',
//   'Anna',
//   'Maria',
//   'Zofia',
//   'Margaret',
//   'Monika',
//   { polish: 'Zuzann', english: 'Sylvia' },
//   'Julia' ]

var sportswoman = {
  athletics: 'Bethsy',
  cycling: 'Peggy',
};

women[8] = sportswoman; // ta referencja zostanie w tablicy zgubiona

console.log(women);

// [ 'Patrycja',
//   'Anna',
//   'Maria',
//   'Zofia',
//   'Margaret',
//   'Monika',
//   { polish: 'Zuzann', english: 'Sylvia' },
//   'Julia',
//   { athletics: 'Bethsy', cycling: 'Peggy' } ]

console.log(women[8]); // {athletics: 'Bethsy', cycling: 'Peggy' }

console.log(women.sportswoman); // undefined

women.ages = 33; // czyli to jest właściwość

console.log(women);
console.log(women.ages);
console.log(women.length);

// [ 'Patrycja',
//   'Anna',
//   'Maria',
//   'Zofia',
//   'Margaret',
//   'Monika',
//   { polish: 'Zuzann', english: 'Sylvia' },
//   'Julia',
//   { athletics: 'Bethsy', cycling: 'Peggy' },
//   ages: 33 ]
// 33
// 9

console.log('\nTo jest metoda tablicy women\n');

women.display = function () {
  for (let i = 0; i < women.length; i++) {
    console.log(women[i]);
  }
}

women.display();

console.log(women);
