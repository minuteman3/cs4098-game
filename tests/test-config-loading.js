var test = require('tape');
var fs = require('fs');

test('config: file exists', function (t) {
    t.plan(1);
    t.doesNotThrow(function () {
        fs.readFileSync('config/server-config.json');
    });
});

test('config: file is valid', function (t) {
    t.plan(1);
    var config = fs.readFileSync('config/server-config.json');
    t.doesNotThrow(function () {
        JSON.parse(config);
    });
});
