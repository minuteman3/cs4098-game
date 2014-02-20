var http = require('http');
var fs = require('fs');
var path = require('path');
var config = require ('./config-loader.js');
var browserify = require('browserify');
var b = browserify(config.APP_DIR + "js/index.js");

http.createServer(function (req,res) {
    if (req.url === "/config") {
        res.writeHead(200);
        res.end("PANIC TYCOON CONFIG\n===================\n\n" + JSON.stringify(config));
        return;
    } else if (req.url === "/js/bundle.js") {
        res.writeHead(200);
        b.bundle().pipe(res);
    } else {
        res.writeHead(200);
        res.end(fs.readFileSync(path.normalize(config.APP_DIR + "index.html")));
        return;
    }
}).listen(config.port || 8080, function() {
    console.log("PANIC TYCOON: Now listening on port " + (config.PORT || 8080));
});
