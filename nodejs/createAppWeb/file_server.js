var server = http.createServer(function (req, res) {
  var url = parse(req.url);
  var path = join(root, url.pathname);
  fs.stat(path, function (err, stat) {
    if (err) {
      if ('ENOENT' == err.code) {
        res.statusCode = 404;
        res.end('Nie znaleziono');
      } else {
        res.statusCode = 500;
        res.end('Wewnętrzny błąd serwera');
      }
    } else {
      res.setHeader('Content-Length', stat.size);
      var stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error', function (err) {
        res.statusCode = 500;
        res.end('Wewnętrzny błąd serwera');
      });
    }
  });
});

server.listen(3000, () => console.log(`Server is running at http://localhost:3000`));
