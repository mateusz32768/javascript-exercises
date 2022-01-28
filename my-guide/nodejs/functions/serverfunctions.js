const http = require('http');
const formidable = require('../createAppWeb/node_modules/formidable');
const {throws} = require('assert');
const {error} = require('console');

function show(req, res) {
  const html = `
    <form method='post' action='/' enctype='multipart/form-data'>
    <p><input type="text" name="name"></p>
    <p><input type="file" name="file"></p>
    <p><input type="submit" value="Submit"></p>
    </form>
    `;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function upload(req, res) {
  if (!isFormatData(req)) {
    res.statusCode = 400;
    res.end('Nieprawidłowe żądanie: oczekiwano typu multipart/form-data');
    return;
  }

  const form = new formidable.IncomingForm();

  form.on('field', (field, value) => {
    console.log(field);
    console.log(value);
  });

  form.on('file', (name, file) => {
    console.log(name);
    console.log(file);
  });

  // form.on('end', () => res.end('Zakończono wysyłanie plików'));
  form.on('progress', (bytesReceived, bytesExpected) => {
    let percent = Math.floor((bytesReceived / bytesExpected) * 100);
    console.log(percent);
  });

  form.parse(req, (err, fields, files) => {
    if (err) throws;
    console.log(fields);
    console.log(files);
    res.end('Zakończono wysyłanie plików');
  });
}

function isFormatData(req) {
  const type = req.headers['content-type'] || '';
  return 0 == type.indexOf('multipart/form-data');
}

module.exports = {show, upload};
