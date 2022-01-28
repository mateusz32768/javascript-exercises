// Object Literal
// new
let obj = {id: 1}  // pary (klucz: wartosc) (key: value) (k: v)

// get
obj
obj.id

// set (add/update)
obj.id = 2;  // BAD
obj = { ...obj }  // spread operator  // == { id: 1 }
obj = {...obj, name: "Beata Czaja"}  // add
obj = {...obj, id: 2}  // update
obj = {...obj, id: 2, name: "Beata Czaja"} // update + add

// delete
delete obj.id  // BAD !!!!!
obj = { id: obj.id }  // Much Better :)

// CRUD
// Read - get
// Create - new
// Update - set
{id: undefined}
// Array

// new
let arr = ["Joanna"]

// get
arr[0]  // "Joanna"

// set (add/update)
arr = [ ...arr ]
arr = [...arr, "Tomasz"] // add

// transformation: array of strings into array of objects (literals)

// new
let arr2 = arr.map((name) => ({ name }))  // [ {name: "Joanna"}, {name: "Tomasz"} ]


// get
arr2.filter((person) => person.name === "Joanna") // [{name: "Joanna"}]
arr2.filter((person) => person.name === "Joanna")[0] // {name: "Joanna"}
arr2.find((person) => person.name === "Joanna") // {name: "Joanna"}

// set (add/update)
arr2.map((person) => ({ ...person }) ) // no changes! :)
let arr3 = arr2.map((person) => ({ ...person, createdAt: "15/12/21" }) ) // [ {name: "Joanna", createdAt: "15/12/21"}, {...} ]
// add (wszystkie elementy array)

let arr4 = arr2.map((person) => {
  // conditional (warunek)
  if (person.name === "Joanna") {
    //return {...person, name: person.name + " Swiderska"}
    return {...person, name: `${person.name} Swiderska`};
  } else {
    return person;
  }
})
  // update (tylko elementu z name: "Joanna")


  (2) [{…}, {…}]0: {name: 'Joanna'}1: {name: 'Tomasz'}length: 2[[Prototype]]: Array(0)
arr4
(2) [{…}, {…}]0: {name: 'Joanna Swiderska'}1: {name: 'Tomasz'}length: 2[[Prototype]]: Array(0)
arr4[0]
{name: 'Joanna Swiderska'}
arr4[1]
{name: 'Tomasz'}
arr4[2]
undefined
arr4[3]
undefined
arr4[4]
undefined
arr4.find((person) => person.name === "Tomasz")
{name: 'Tomasz'}
arr4[1]
{name: 'Tomasz'}
[1, 2, 3]
(3) [1, 2, 3]
  [3, 4, 5]
(3) [3, 4, 5]
  [3, 4, 5][0]
3
  [3, 4, 5][1]
4
  [3, 4, 5][2]
5
  [3, 4, 5][3]
undefined
let isLoggedIn = true
undefined
isLoggedIn
true
  [true, false, true, 44, "Filip"][2]
true
  [94894, 3092832, 9548948].map((num) => num * 3)
(3) [284682, 9278496, 28646844]0: 2846821: 92784962: 28646844length: 3[[Prototype]]: Array(0)
// arr8.map((x) => x + "!")
undefined
44 + "!"
'44!'
"Joanna" + "!"
'Joanna!'
  [94894, 3092832, 9548948].map((num) => num * 3)
(3) [284682, 9278496, 28646844]
let person1 = {id: 1, name: "M", city: "K", age: 22}
undefined
let person2 = {id: 2, name: "M", city: "K", age: 22}
undefined
let people = [person1, person2]
undefined
people.map(person => person.name)
(2) ['M', 'M']
people.map(person => ({...person, createdAt: new Date()}) )
(2) [{…}, {…}]0: {id: 1, name: 'M', city: 'K', age: 22, createdAt: Wed Dec 15 2021 18:47:52 GMT+0100 (Central European Standard Time)}age: 22city: "K"createdAt: Wed Dec 15 2021 18:47:52 GMT+0100 (Central European Standard Time)[[Prototype]]: Objectid: 1name: "M"[[Prototype]]: Object1: {id: 2, name: 'M', city: 'K', age: 22, createdAt: Wed Dec 15 2021 18:47:52 GMT+0100 (Central European Standard Time)}length: 2[[Prototype]]: Array(0)
people.filter((person) => person.age > 21)
(2) [{…}, {…}]0: {id: 1, name: 'M', city: 'K', age: 22}1: {id: 2, name: 'M', city: 'K', age: 22}length: 2[[Prototype]]: Array(0)
  [1,2,3,4,5].filter((n) => n > 3)
(2) [4, 5]
  [1,2,3,4,5].filter((n) => n >= 3)
(3) [3, 4, 5]
  [1,2,3,4,5].filter((n) => n < 3)
(2) [1, 2]
// data types
// arrays (new, get, set)
// conditionals
// loops
// variables
// functions
undefined
"Hello"
'Hello'
44
44
44.44
44.44
true
true
null
null
undefined
undefined
  [1,2,3]
(3) [1, 2, 3]
{name: "Filip"}
{name: 'Filip'}
if (2 === 2) {
  "2"
} else {
  "not 2"
}
'2'
if (2 === 3) {
  "2"
} else {
  "not 2"
}
'not 2'
  [1,2,3].map((n) => n + 1)
(3) [2, 3, 4]
let greeting = "Hello!"
undefined
greeting
'Hello!'
const dontChangeMe = true
undefined
dontChangeMe
true
