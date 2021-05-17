export const book = {
  name: 'Paragraf 22',
  published: 1961,
  author: {
    firstName: 'Joseph',
    lastName: 'Heller'
  }
};

// console.log(book['author']['firstName']);
// console.log(book.author.lastName);
// console.log(book.author['firstName']);

let key = 'name';
// console.log(book[key]);

// Deklaracja pustego obiektu
const student = {};

student.name = 'Piotr';
student.surname = 'Piekarz';
student.sayName = function(){
  console.log(`Jestem studentem i mam na imię ${student.name}`);
}

student.sayName();

student.saySurname = function(){
  console.log(`Jestem studentem i nazywam się ${this.surname}`);
}

//student.saySurname();

// Konstruktor

function Point(x, y){
  this.coordinateX = x;
  this.coordinateY = y;

  this.module = function(){
    return Math.sqrt(
      Math.pow(this.coordinateX, 2) + Math.pow(this.coordinateY, 2)
    ).toFixed(2);
  }
}

const pointA = new Point(3, 4);
const pointB = new Point(4, 3);

// console.log(pointA.module());
// console.log(pointB.module());