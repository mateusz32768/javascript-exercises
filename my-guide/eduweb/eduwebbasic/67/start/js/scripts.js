var body = document.body,
    btn = document.querySelector("#btn");

body.addEventListener("click", function(e) {

    console.log("Kliknąłeś w body");

}, false);

body.addEventListener("click", function(e) {

    console.log("Kliknąłeś w body ponownie");

}, false);

btn.addEventListener("click", function(e) {

    console.log("Kliknąłeś przycisk");

}, false);