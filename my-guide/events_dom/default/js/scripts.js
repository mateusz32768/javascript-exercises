var form = document.querySelector("#myForm"),
  link = document.querySelector("#showMessage");

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log('Wysyła się');
//   console.log(e);
// });

form.addEventListener("submit", function (e) {

  if (this.firstName.value === "") {
    e.preventDefault();
    alert("Wpisz swoje imię!");
  }

}, false);

form.querySelector("#firstName").addEventListener("keypress", function (e) {

  if (String.fromCharCode(e.charCode) === "a") {
    e.preventDefault();
    console.log('Naciśnąłeś literkę a');
  }
  console.log(e);

}, false);

link.onclick = function (e) {

  e.preventDefault();

  var message = document.querySelector(e.target.hash); // na serwerze e.target.href
  console.log(e.target.hash);
  console.log(message);

  message.style.display = "block";

  return false;

};