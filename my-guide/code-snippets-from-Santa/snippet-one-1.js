// Object Literal
// new
let obj = {id: 1} // pary (klucz: wartosc) (key: value) (k: v)

// get
console.log(obj)
console.log(obj.id)

// set (add/update)
obj.id = 2 // BAD, nope because it override object
obj = {...obj} // spread operator  // == { id: 1 }
obj = {...obj, name: 'Beata Czaja'} // add
obj = {...obj, id: 2} // update
obj = {...obj, id: 2, name: 'Beata Czaja'} // update + add

// delete
delete obj.id // BAD !!!!!
obj = {id: obj.id} // Much Better :)

// CRUD
// Read - get
// Create - new
// Update - set
{
  id: undefined
}
// Array

// new
let arr = ['Joanna']

// get
arr[0] // "Joanna"

// set (add/update)
arr = [...arr]
arr = [...arr, 'Tomasz'] // add

// transformation: array of strings into array of objects (literals)

// new
let arr2 = arr.map(name => ({name})) // [ {name: "Joanna"}, {name: "Tomasz"} ]

// get
arr2.filter(person => person.name === 'Joanna') // [{name: "Joanna"}]
arr2.filter(person => person.name === 'Joanna')[0] // {name: "Joanna"}
arr2.find(person => person.name === 'Joanna') // {name: "Joanna"}

// set (add/update)
arr2.map(person => ({...person})) // no changes! :)
let arr3 = arr2.map(person => ({...person, createdAt: '15/12/21'})) // [ {name: "Joanna", createdAt: "15/12/21"}, {...} ]
// add (wszystkie elementy array)

let arr4 = arr2.map(person => {
  // conditional (warunek)
  if (person.name === 'Joanna') {
    //return {...person, name: person.name + " Swiderska"}
    return {...person, name: `${person.name} Swiderska`}
  } else {
    return person
  }
})
// update (tylko elementu z name: "Joanna")

//   (2) [{…
// },
// {…
// }
// ]
// 0;
// :
// {
//   name: 'Joanna';
// }
// 1;
// :
// {
//   name: 'Tomasz';
// }
// length: 2[[Prototype]];
// :
// Array(0);
// arr4
// (2) [{…
// },
// {…
// }
// ]
// 0;
// :
// {
//   name: 'Joanna Swiderska';
// }
// 1;
// :
// {
//   name: 'Tomasz';
// }
// length: 2[[Prototype]];
// :
// Array(0);
