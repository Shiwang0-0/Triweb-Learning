var a = require('./dateModule');
var http =require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("It is " + a.date() + " right now");
    res.end();
  }).listen(3000);