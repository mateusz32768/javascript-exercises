var date1 = new Date(2015, 3, 21),
    date2 = new Date(2015, 4, 21);

console.log( date1.getTime() > date2.getTime() );
console.log( date1.getTime() < date2.getTime() );
console.log( date1.getTime() === date2.getTime() );