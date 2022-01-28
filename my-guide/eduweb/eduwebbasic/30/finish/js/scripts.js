function square(num) {

    return num * num;

}

var firstName = "Tomasz";

var person = {
    firstName: "Tomasz",
    lastName: "Kowalski"
};

function sayHello(obj) {

    obj.firstName = "Piotr";

    return "Witaj, " + obj.firstName + " " + obj.lastName;

}

console.log(sayHello(person));