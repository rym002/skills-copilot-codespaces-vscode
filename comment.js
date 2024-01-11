// Create web server
// Create a web server that can listen to requests for /hello and responds with some HTML that says <h1>Hello World</h1>
// For an extra challenge, make the homepage (localhost:8080) display a file index that links to both hello and goodbye and returns the HTML files for them.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  } else if (req.url === "/hello") {
    fs.readFile('hello.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  } else if (req.url === "/goodbye") {
    fs.readFile('goodbye.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("404 error: File not found");
  }
});

server.listen(8080);
console.log("Server is listening on port 8080");