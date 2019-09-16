var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + myDateTime());
}).listen(8080);

myDateTime = function() {
    return Date();
};