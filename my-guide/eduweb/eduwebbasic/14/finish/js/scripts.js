var number = 10;

while(number > 0) {
    // console.log(number);
    number--;
}

var secretNumber = 2;

while(prompt("Podaj liczbę") != secretNumber) {
    alert("Nie trafiłeś!");
}

alert("Brawo!");