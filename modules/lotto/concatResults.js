const readline = require('readline');
const fs = require('fs');

let file = 'dl.txt';
let rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false,
});

file = 'results.txt';
let writeStream = fs.createWriteStream('results.txt');

rl.on('line', function (line) {
  let result = line.split(' ');
  writeStream.write(result[2] + ',');
});
