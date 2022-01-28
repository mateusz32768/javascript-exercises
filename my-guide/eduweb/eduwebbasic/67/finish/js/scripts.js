var body = document.body,
    btn = document.querySelector("#btn");

body.addEventListener("click", function(e) {

    console.log(e.eventPhase);

    console.log("Kliknąłeś w body");

}, true);

body.addEventListener("click", function(e) {

    console.log(e.eventPhase);

    console.log("Kliknąłeś w body ponownie");

}, false);

btn.addEventListener("click", function(e) {

    console.log(e.eventPhase);

    console.log("Kliknąłeś przycisk");

}, false);

// phase 1 - capturing
// phase 2 - on target
// phase 3 - bubbling