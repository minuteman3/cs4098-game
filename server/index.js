var http = require('http');
var fs = require('fs');
var path = require('path');
var config = require ('./config-loader.js');

module.exports = null;

http.createServer(function (req,res) {
    var result = /^\/?(lib|css|js)\/.+$/.exec(req.url);
    if (req.url === "/config") {
        res.writeHead(200);
        res.end("PANIC TYCOON CONFIG\n===================\n\n" + JSON.stringify(config));
        return;
    } else if (result) {
        res.writeHead(200);
        res.end(fs.readFileSync(path.normalize(config.APP_DIR + result[0])));
        return;
    } else {
        res.writeHead(200);
        res.end(fs.readFileSync(path.normalize(config.APP_DIR + "index.html")));
        return;
    }
}).listen(config.port || 8080, function() {
    console.log("PANIC TYCOON: Now listening on port " + (config.PORT || 8080));
});
