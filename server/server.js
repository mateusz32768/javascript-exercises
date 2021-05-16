const http = require('http');

http.createServer((req, res) => {
  res.writeHeader(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello world!');
  console.log(req.url);
}).listen('3000', '127.0.0.1');

console.log('The server is running : localhost:3000');