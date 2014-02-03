var http = require('http');

module.exports = null;

http.createServer(function (req,res) {
    res.writeHead(200);
    res.end("PANIC TYCOON");
}).listen(8080);


