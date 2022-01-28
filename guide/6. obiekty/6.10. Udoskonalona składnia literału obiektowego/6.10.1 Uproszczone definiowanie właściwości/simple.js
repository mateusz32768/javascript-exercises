// Tak tworzymy literał obiektowy
const point = {
  coordinateX: 3,
  coordinateY: 4,

  module() {
    return Math.sqrt(this.coordinateX ** 2 + this.coordinateY ** 2);
  },
};

console.log(point.module());

// Deklarujemy zmienne
let balance = 5000;
let percent = 5;
let owner = 'John Kovalsky';

// Tworzymy obiekt account z powyższymi właściwościami
const account = {
  balance: balance,
  percent: percent,
  owner: `John Kovalsky`,
};

account.bonus = 200;

console.log(account);

// Podobny obiekt można teraz utworzyć prościej
let id = 1;
let firstName = 'Marek';
let lastName = 'Raubuć';
let profesional = 'technician';

const employeeCommpany = { id, firstName, lastName, profesional };

employeeCommpany.holiday = 26;

console.log(employeeCommpany);

let names = ['Joanna', 'Marek', 'Tomasz'];
let namesOne = names.map(name => ({ name }));

console.log(namesOne);
