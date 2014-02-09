var http = require('http');
var config = require ('./config-loader.js');

module.exports = null;

http.createServer(function (req,res) {
    res.writeHead(200);
    res.end("PANIC TYCOON CONFIG\n===================\n\n" + JSON.stringify(config));
}).listen(config.port || 8080, function() {
    console.log("PANIC TYCOON: Now listening on port " + (config.port || 8080));
});
