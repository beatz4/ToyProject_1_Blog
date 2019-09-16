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

// append the file
fs.appendFile('mynewfile.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

// open the file
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// write the file
fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

// delete file
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});