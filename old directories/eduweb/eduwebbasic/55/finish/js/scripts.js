var link = document.querySelector(".link"),
    href = link.getAttribute("href");

link.setAttribute("href", "http://eduweb.pl");

link.removeAttribute("class");

var button = document.querySelector("button");

button.setAttribute("disabled", true);
button.removeAttribute("disabled");

var img = document.createElement("img");

img.src = "http://i.imgur.com/P2zuQvY.png";

document.body.appendChild(img);

var attrs = img.attributes;