const keywords = [
  'as', 'const', 'export', 'get', 'null', 'target', 'void', 'async', 'continue', 'extends',
  'if', 'of', 'this', 'while', 'await', 'debugger', 'false', 'import', 'return', 'throw',
  'with', 'break', 'default', 'finally', 'in', 'set', 'true', 'yield', 'case', 'delete', 'for',
  'instanceof', 'static', 'try', 'catch', 'do', 'from', 'let', 'super', 'typeof', 'class',
  'else', 'function', 'new', 'switch', 'var'
]

keywords.sort()

console.log(keywords)

for (const keyword of keywords) {
 console.log(keyword)
}

let word = 'const'

if((keywords.indexOf(word) === -1)) {
  console.log(`Słowo ${word} nie słowem kluczowym języka programowania JavaScript`);
} else {
  console.log(`Słowo ${word} jest słowem kluczowym języka programowania JavaScript`);
}