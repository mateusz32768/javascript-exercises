function sum1(num1, num2) {

    if(arguments.length === 2 && typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return "Podaj poprane argumenty";
    }

}

function sum() {

    var total = 0;

    for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;

}

console.log( sum(2, 3, 5, 6, 10) );