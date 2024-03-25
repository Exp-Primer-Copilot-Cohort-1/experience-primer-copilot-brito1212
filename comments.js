// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Your server should respond to a GET request to /comments with the comments.html file.
// comments.html should be served with the correct Content-Type header.
// Use the fs module to read the comments.html file from the disk.
// The server should respond to requests for any other path with a 404 status code and a message of "Not Found".
// Your server should respond to requests using the correct Content-Type header.
// The server should respond with the contents of the comments.html file.
// The server should listen on port 3000.

var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
  if (req.url === '/comments') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Not Found');
  }
});

server.listen(3000);
console.log('Server listening on port 3000');