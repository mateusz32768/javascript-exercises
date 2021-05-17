var form = document.querySelector("#myForm"),
    link = document.querySelector("#showMessage");

form.addEventListener("submit", function(e) {

    if(this.firstName.value === "") {
        e.preventDefault();
        alert("Wpisz swoje imię!");
    }

}, false);

form.querySelector("#firstName").addEventListener("keypress", function(e) {

    if(String.fromCharCode(e.charCode) === "a") {
        e.preventDefault();
    }

}, false);

link.onclick = function(e) {

    e.preventDefault();

    var message = document.querySelector(e.target.hash); // na serwerze e.target.href

    message.style.display = "block";

    return false;

};