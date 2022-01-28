var container = document.querySelector("#container"),
    box = container.querySelector(".box");

console.log( box.scrollTop );
console.log( box.scrollLeft );

window.scrollTo(0, 200);
window.scrollBy(0, -100);