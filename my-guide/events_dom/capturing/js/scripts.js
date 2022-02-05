var body = document.body,
  btn = document.querySelector("#btn");

body.addEventListener("click", function (e) {

  console.log(e.eventPhase);

  console.log("Kliknąłeś w body");

}, true);

body.addEventListener("click", function (e) {

  console.log(e.eventPhase);

  console.log("Kliknąłeś w body ponownie");

}, true);

btn.addEventListener("click", function (e) {

  console.log(e.eventPhase);

  console.log("Kliknąłeś przycisk");

}, false);

// phase 1 - capturing zdarzenia są propagowane od rodzica w dół
// phase 2 - on target
// phase 3 - bubbling zdarzenia są propagowane  od target w górę
// trzeci parametr to useCapturing
