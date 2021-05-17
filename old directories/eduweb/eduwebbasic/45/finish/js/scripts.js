// console.log(window);

function sayHello() {

    // window.message = "Cześć!";
    message = "Cześć!";

    // alert(message);
    // var con = confirm("Czy wyrażasz zgodę?");
    var ans = prompt("Jak masz na imię?", "Podaj swoje imię");

    console.log(ans);

}

sayHello();

console.log(message);