Window; // => ƒ Window() { [native code] }
Window.document; // => undefined
window.document.Document; // =>undefined
Document; // => ƒ Document() { [native code] }
Document(); // =>  Uncaught TypeError: Failed to construct 'Document':
// Please use the 'new' operator, this DOM object constructor cannot be called as a function.

new Document(); // => #document
new Window(); // => Uncaught TypeError: Illegal constructor

window; // Window{window: Window, self: Window, document: document, name: '', itp


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = new Person('Jan', 'Kowalski');
person; // => Person{firstName: 'Jan', lastName: 'Kowalski'}firstName:
// "Jan"lastName: "Kowalski"[[Prototype]]: Object
const johnKovalsky = new Person('John', 'Kovalsky');
johnKovalsky; // =>Person{firstName: 'John', lastName: 'Kovalsky'}
