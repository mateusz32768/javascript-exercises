var h1 = document.querySelector("h1"),
    container = document.querySelector("#container"),
    p = container.querySelectorAll("p"),
    link = container.querySelector("a");

h1.style.color = "#ff0000";
h1.style.fontSize = "20px"; // ["font-size"]

container.style.cssText = "width: 600px; margin: 0 auto;";

for(var i = 0; i < p.length; i++) {
    p[i].style.lineHeight = "30px";
}

link.style.display = "block";
link.style.display = "";

// console.log( parseInt(container.style.width) );

console.log(window.getComputedStyle(h1).display);