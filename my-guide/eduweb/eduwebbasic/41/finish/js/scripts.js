var d = new Date();
var d2 = new Date(12312413123);
var d3 = new Date(2015, 0, 16, 12, 23, 55, 989);

// console.log( d3.getFullYear() ); // rok
// console.log( d3.getMonth() ); // miesiąc
// console.log( d3.getDate() ); // dzień
// console.log( d3.getHours() ); // godzina
// console.log( d3.getMinutes() ); // minuty
// console.log( d3.getMilliseconds() ); // ms
// console.log( d3.getDay() ); // dzień tygodnia
// console.log( d3.getTime() );

console.log( d3.toString() );
console.log( d3.toLocaleString() );

console.log( d3.getDate() + "." + (d3.getMonth() + 1) + "." + d3.getFullYear() );

d3.setFullYear(2020);

console.log( d3.getFullYear() );

var d4 = new Date("Fri Jan 16 2015 12:23:55 GMT+0100 (CET)");