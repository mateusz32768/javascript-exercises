var h1 = document.querySelector("h1");

h1.onclick = function (e) {
  alert(firstName);

  var text = this.textContent;

  this.textContent = text.toUpperCase();

};

// https://developers.google.com/web/tools/chrome-devtools

