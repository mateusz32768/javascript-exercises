function sayHello(firstName, lastName) {
    return firstName + " " + lastName;
}

// var f = new Function("firstName", "lastName", "return firstName + ' ' + lastName;");

function f(firstName, lastName) {

    arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1;

    return firstName + " " + lastName + ", funkcja wywołana po raz " + arguments.callee.counter++;

}

console.log( f.length );