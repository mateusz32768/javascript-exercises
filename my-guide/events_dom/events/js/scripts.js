var btn2 = document.querySelector("#btn2"),
    btn3 = document.querySelector("#btn3");

function sayHello() {
    alert("Hej!");
}

btn2.onclick = sayHello;
btn2.onclick = function() {
    alert("Witaj!");
};

btn3.addEventListener("click", sayHello, false);
btn3.addEventListener("click", function() {
    alert("Witaj!");
}, false);

btn2.onclick = null;

btn3.removeEventListener("click", sayHello, false);