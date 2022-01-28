// https://developer.mozilla.org/en-US/docs/Learn/JavaScript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

let person = {};

person = {
  ...person,
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    console.log(
      `${this.name[0]} ${this.name[1]} is ${this.age} years old. He is  ${this.gender} and  likes ${this.interests[0]} and ${this.interests[1]}`
    );
  },

  gretting: function () {
    console.log(`Hi, I\'am ${this.name[0]}`);
  }
};

person.gretting();
person.bio();

person.age;
person.interests[1];
person.bio();

person = {
  ...person,
  name: { firstName: 'Bob', lastName: 'Smith' },
  bio: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old. He is  ${this.gender} and  likes ${this.interests[0]} and ${this.interests[1]}`
    );
  },

  gretting() {
    console.log(`Hi, I\'am ${this.firstName}`);
  }
};

/*
 * Bracket notation
 *
 * Istnieje inny sposób uzyskania dostępu do właściwości obiektu — za pomocą notacji nawiasów. Zamiast używać tych:
 * */

person.age;
person.name.firstName;

/*
 * You can use:
 * */

person['age'];
person['name']; // => {firstName: 'Bob', lastName: 'Smith'}
person['name']['firstName'];

/*
 *
 * Wygląda to bardzo podobnie do sposobu, w jaki uzyskujesz dostęp do elementów w tablicy i zasadniczo jest to to samo
 * — zamiast używania numeru indeksu do wybierania elementu, używasz nazwy powiązanej z wartością każdego elementu.
 * Nic dziwnego, że obiekty są czasami nazywane tablicami asocjacyjnymi — mapują one-by-ullman łańcuchy na wartości w taki sam
 * sposób, w jaki tablice mapują liczby na wartości.
 * */

person.age = 45;
person['name']['last'] = 'Cratchit';

person.age;
person['name']['last'];

person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};

person['eyes'];
person.farewell();

/*
 *
 * Jednym z przydatnych aspektów notacji nawiasów jest to, że można jej użyć do dynamicznego ustawiania nie tylko
 * wartości elementów, ale także nazw elementów. Załóżmy, że chcieliśmy, aby użytkownicy mogli przechowywać
 * niestandardowe typy wartości w swoich danych osobowych, wpisując nazwę członka i wartość w dwóch polach tekstowych.
 * Moglibyśmy uzyskać te wartości w ten sposób:
 * */

const nameInput = {
  value: 'height'
};
// ocument.querySelector('#nameInput');
const nameValue = { value: '1.72' };
// document.querySelector('#nameValue');

let myDataName = nameInput.value;
let myDataValue = nameValue.value;

/*
 * Moglibyśmy wtedy dodać tę nową nazwę członka i wartość do obiektu osoby w ten sposób:
 */

person[myDataName] = myDataValue;
// person[myDataName] = myDataValue;

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#what_is_this
// What is "this"? TODO
