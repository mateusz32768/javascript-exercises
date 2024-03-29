let strname = "string name"; // Ciąg pełniący funkcję nazwy właściwości.
let symname = Symbol("propname"); // Symbol pełniący funkcję nazwy właściwości.
console.log(typeof strname); // => "string": jest ciągiem znaków.
console.log(typeof symname); // => "symbol": symname jest symbolem.

let o = {}; // Utworzenie nowego obiektu.
o[strname] = 1; // Zdefiniowanie właściwości o nazwie określonej za pomocą
// ciągu znaków.
o[symname] = 2; // Zdefiniowanie właściwości o nazwie określonej za pomocą
// symbolu.

console.log(o[strname]); // => 1: odwołanie do właściwości o nazwie określonej
// za pomocą ciągu znaków.
console.log(o[symname]); // => 2: odwołanie do właściwości o nazwie określonej
// za pomocą symbolu.

console.log(strname);
console.log(symname);

console.log(typeof strname);
console.log(typeof symname);

console.log(strname.toString());
console.log(symname.toString());

let sx = Symbol("sym_x");
sx.toString(); // => "Symbol(sym_x)"

let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t; // => true
s.toString(); // => "Symbol(shared)"
Symbol.keyFor(t); // => "shared"

console.log(Symbol.keyFor(symname));
console.log(Symbol.keyFor(t));
