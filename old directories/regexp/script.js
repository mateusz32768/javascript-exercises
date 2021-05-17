const regexp = new RegExp('l.*r', 'i'); // . -oznacza dowolny znak ; 
//* zero lub więcej wystąpień znaków poprzedzających gwiazdkę

const string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, repellat. Praesentium voluptates, dolorem magnam
tempora distinctio iste veritatis. Voluptas illo minus laborum quo necessitatibus id nulla voluptatibus quis
mollitia ducimus!`;

console.log(regexp.test(string));

let arrayString = [];
arrayString = regexp.exec(string);
console.log(arrayString.length);
console.log(arrayString[0]); 
