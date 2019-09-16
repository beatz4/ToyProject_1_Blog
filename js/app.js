var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('../index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

// http.createServer(function (req, res) {
//   fs.readFile('../index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // argument 1 : 200 means that all is OK
//   // argument 2 : object containing the response headers
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   // res.write(req.url);
//   res.end(txt);
// }).listen(8080);

myDateTime = function() {
    return Date();
};