var person = {
    "first-name": "Tomasz",
    lastName: "Kowalski",
    age: 32
};

person["job"] = "programista";

delete person.age;

console.log(person);

var person2 = person;

person2.age = 23;