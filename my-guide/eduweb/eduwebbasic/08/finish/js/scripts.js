var number = 20;

if(number == "20") {
    console.log("Liczba jest równa 20");
}

if(undefined === null) {
    console.log("undefined jest równe null");
}

if(number !== "20") {
    console.log("Liczba nie jest równa 20");
}

if(number > 10) {
    console.log("Liczba jest większa od 10");
}

if(number < 10) {
    console.log("Liczba jest mniejsza od 10");
}

if(number <= 20) {
    console.log("Liczba jest mniejsza lub równa 20");
}

if(number >= 20) {
    console.log("Liczba jest większa lub równa 20");
}

var number2 = 6;
var isEven = (number % 2) === 0;