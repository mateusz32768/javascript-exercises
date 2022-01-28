var a = 11;

console.log(a); // 11
console.log(window.a); // 11
console.log(window['a']); // 11
console.log(this.a); // 11


function Student(name) {
  this.name = name;
}

var mathematicsStudent = Student('Jan Kowalski');
console.log(typeof mathematicsStudent); // undefined
console.log(typeof mathematicsStudent.name); // Uncaught TypeError: Cannot read property 'name' of undefined

console.log(name); // 'Jan Kowalski'
console.log(window.name); // "Jan Kowalski"

var studentOfPhilosophy = new Student('Amadeus Socrates');

console.log(typeof studentOfPhilosophy); //"object"
console.log(studentOfPhilosophy.name); // "Amadeus Socrates"

console.log(parseInt('7 cudów świata')); // 7
console.log(window.parseInt('7 cudów świata')); // 7