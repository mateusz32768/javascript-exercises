// 6.10.1. Uproszczone definiowanie właściwości

let firstName = "Jan";
let lastName = "Kowalski";

const myFriend = {
  firstName,
  lastName,
};

console.log(myFriend);

//6.10.2 Wyliczanie nazwy właściwości

const PROPERTY_NAME = "propertyOne";

function computePropertyName() {
  return "property" + "Two";
}

const myObject = {};
myObject[PROPERTY_NAME] = 2;
myObject[computePropertyName()] = 22;

console.log(myObject);

// Nowa funkcjonalność - wyliczalna właściwość

const myObjectOne = {
  [PROPERTY_NAME]: 11,
  [computePropertyName()]: 33,
};

console.log(myObjectOne);

// Zastosowanie do przekształcania obiektów

const RESULT_PROPERTY_ONE = "name";
const RESULT_PROPERTY_TWO = "stars";
const RESULT_PROPERTY_THREE = "license";

const SOURCE_PROPERTY_ONE = "name";
const SOURCE_PROPERTY_TWO = "stargazers_count";
const SOURCE_PROPERTY_THREE = "license";
const SOURCE_PROPERTY_FOUR = "spdx_id";

const ghRepoMock = {
  name: "brains",
  stargazers_count: 32,
  license: {
    spdx_id: "MIT",
  },
};

function converter(source){
	return {
			[RESULT_PROPERTY_ONE]: source[SOURCE_PROPERTY_ONE],
			[RESULT_PROPERTY_TWO]: source[SOURCE_PROPERTY_TWO],
			[RESULT_PROPERTY_THREE]: source[SOURCE_PROPERTY_THREE][SOURCE_PROPERTY_FOUR]
	}
}

const result = converter(ghRepoMock);
console.log(result);
