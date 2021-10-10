const user = {
  name: 'Tomek',
  age: 40
};

function getName() {
  const prefix = 'Imię użytkownika';
  return `${prefix} ${user.name}`;
}

console.log(getName());
// console.log(prefix); // ReferenceError: prefix is not defined

function addTwoNumber(x) {
  return function (y) {
    return x + y;
  };
}

const sum = addTwoNumber(5);

console.log(sum(6)); // 11
console.log(sum(7)); // 12

console.log(addTwoNumber(9)(8)); //17

