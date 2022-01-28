// var regex = /a+/gi;

var regex = new RegExp("a+", "ig");

var n = "Ania";

console.log( n.replace(regex, "p") );

console.log( regex.test("kolejk") );