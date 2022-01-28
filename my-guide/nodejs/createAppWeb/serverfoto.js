const http = require('http');
const serverfunctions = require('../functions/serverfunctions');

http
  .createServer((req, res) => {
    switch (req.method) {
      case 'GET':
        serverfunctions.show(req, res);
        break;
      case 'POST':
        serverfunctions.upload(req, res);
        break;
    }
  })
  .listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
  });
