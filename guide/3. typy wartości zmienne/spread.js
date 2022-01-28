const person = {
  name: 'Anna',
  age: 40,
  father: {
    name: 'Andrew',
    age: 67
  }
}

let { father } = person;
let {name: fathersName} = father;

console.log(fathersName);