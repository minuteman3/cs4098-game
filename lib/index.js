var http = require('http');
var config = require ('./config-loader.js');

module.exports = null;

http.createServer(function (req,res) {
    res.writeHead(200);
    res.end("PANIC TYCOON");
}).listen(8080);
