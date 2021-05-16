const http = require("http");
const items = [];

const server = http.createServer(function (req, res) {
  if ("/" == req.url) {
    switch (req.method) {
      case "GET":
        show(res);
        break;
      case "POST":
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});

server.listen(3000, () =>
  console.log(`Server is running at http://localhost:3000`)
);

function show(res) {
  let li = items
    .map(function (item) {
      return `<li>${item}</li >`;
    })
    .join("");

  let html = `
  <html>
  <head>
  <title>Lista rzeczy do zrobienia</title>
  </head>
  <body>
  <h1>Lista rzeczy do zrobienia</h1>
  <ul>${li}</ul>
  <form method="post" action="/">
  <p><input type="text" name="item" /></p>
  <p><input type="submit" value="Dodaj element" /></p>
  </form>
  </body>
  </html>`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", Buffer.byteLength(html));
  res.end(html);
}

const qs = require("querystring");

function add(req, res) {
  let body = "";
  req.setEncoding("utf8");
  req.on("data", function (chunk) {
    body += chunk;
  });
  req.on("end", function () {
    obj = qs.parse(body);
    items.push(obj.item);
    show(res);
  });
}

function notFound(res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Nie znaleziono zasobu");
}

function badRequest(res) {
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/plain");
  res.end("Nieprawidłowe żądanie");
}
