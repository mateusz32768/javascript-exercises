var link = document.querySelector(".link");

console.log( link.className );

link.classList.add("red", "green");
link.classList.remove("red");
link.classList.toggle("green");

console.log(link.classList.contains("red"));