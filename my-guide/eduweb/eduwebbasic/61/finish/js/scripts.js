var container = document.querySelector("#container"),
    box = container.querySelector(".box");

console.log( box.offsetTop );
console.log( box.offsetLeft );
console.log( box.offsetParent );

var pos = box.getBoundingClientRect();

console.log( pos );

console.log( document.elementFromPoint(399, 200) );