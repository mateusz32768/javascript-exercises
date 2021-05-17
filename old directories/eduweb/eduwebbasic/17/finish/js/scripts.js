var person = {
    "imię": "Maciej",
    "nazwisko": "Kowalski",
    "wiek": 32
};

var person2 = {};

// for(var key in person) {
//     console.log(key + ": " + person[key]);
// }

for(var key in person) {
    person2[key] = person[key];
}

console.log(person2);