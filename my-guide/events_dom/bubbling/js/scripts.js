var body = document.body,
  btn = document.querySelector("#btn");

body.addEventListener("click", function (e) {

  console.log("Kliknąłeś w body");

}, false);


btn.addEventListener("click", function (e) {

  e.stopPropagation();
  e.stopImmediatePropagation();

  console.log("Kliknąłeś w przycisk");

}, false);

btn.addEventListener("click", function (e) {

  console.log("Znów kliknąłeś w przycisk");

}, false);