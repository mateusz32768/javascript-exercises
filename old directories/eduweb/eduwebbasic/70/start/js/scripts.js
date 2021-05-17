var h1 = document.querySelector("h1");

h1.onclick = function(e) {

    var text = this.textContent;

    this.textContent = text.toUpperCase();

};