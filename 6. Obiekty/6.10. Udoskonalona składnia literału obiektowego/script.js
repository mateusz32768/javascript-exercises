// 6.10.1. Uproszczone definiowanie właściwości

let firstName = 'Jan';
let lastName = 'Kowalski';

// Kiedyś tak:
// const myFriend = {
// 	firstName: firstName,
// 	lastName: lastName,
// };

// Teraz tak:
const myFriend = {
	firstName,
	lastName,
};

console.log(myFriend.firstName);
console.log(myFriend.lastName);

//6.10.2 Wyliczanie nazwy właściwości

const PROPERTY_NAME = 'propertyOne';
function computePropertyName() {
	return 'property' + 'Two';
}

const myObject = {};

myObject[PROPERTY_NAME] = 2;
console.log(myObject.propertyOne);
console.log(myObject[PROPERTY_NAME]);

myObject[computePropertyName()] = 22;
console.log(myObject.propertyTwo);
console.log(myObject[computePropertyName()]);
