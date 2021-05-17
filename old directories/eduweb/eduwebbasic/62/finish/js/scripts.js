var container = document.querySelector("#container"),
    box = container.querySelector(".box"),
    link = container.querySelector("a");

var containerDim = container.getBoundingClientRect();

// console.log( box.getBoundingClientRect().width );
// console.log( box.offsetWidth );

// console.log( container.clientWidth );
// console.log( container.clientHeight );

console.log( box.scrollWidth );
console.log( box.scrollHeight );

// console.log( link.offsetWidth );

// console.log( window.innerWidth );
// console.log( window.innerHeight );