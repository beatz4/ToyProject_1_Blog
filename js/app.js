var http = require('http');
var url = require('url');
var fs = require('fs');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
        user: 'blahblah@naver.com',
        pass: 'blahblah'
    }
});

var mailOptions = {
    from: 'blahblah@naver.com',
    to: 'blahblah@naver.com',
    subject: 'Sending Email using Node.js',
    // html: '<h1>Welcome</h1><p>That was easy!</p>'
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// ********* file upload
// var formidable = require('formidable');

// http.createServer(function(req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files) {
//             var oldpath = files.filetoupload.path;
//             var newpath = 'C:/Users/beatz/Documents/Project/ToyProject_1_Blog/js/test/' + files.filetoupload.name;
//             fs.rename(oldpath, newpath, function(err) {
//                 if (err) throw err;
//                 res.write('File uploaded');
//             res.end();
//             });
//         });
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//     }
// }).listen(8080);

// ***** module event
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function() {
//     console.log('I hear a scream!');
// }

// eventEmitter.on('scream', myEventHandler);
// eventEmitter.emit('scream');

// ********* node js event
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function() {
//     console.log('The file is open');
// });

// ********* use npm library - upper-case
// var uc = require('upper-case');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc("Hello World"));
//     res.end();
// }).listen(8080);

// url 주소에 따라 해당 파일을 찾아서 open
// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = ".." + q.pathname;

//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }

//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// var adr = 'http://localhost:8080/index.html?year=2017&month=february';
// var q = url.parse(adr, true);

// // http://localhost:8080
// console.log(q.host);
// // /index.html
// console.log(q.pathname);
// // year=2017&month=february
// console.log(q.search);

// var qdata = q.query;
// // february
// console.log(qdata.month);
// console.log(qdata.year);

// http.createServer(function (req, res) {
//     fs.readFile('../index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);

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

// myDateTime = function() {
//     return Date();
// };

// // append the file
// fs.appendFile('mynewfile.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // open the file
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // write the file
// fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // delete file
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// // rename file
// fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err) { 
//     if (err) throw err;
//     console.log('File Renamed!');
// });