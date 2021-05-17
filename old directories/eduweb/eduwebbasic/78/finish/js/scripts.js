var text = "";

for(var i = 0; i < 100; i++) {
    text += "-";
}

console.log(text);

var text = (new Array(101)).join("-");

console.log(text);