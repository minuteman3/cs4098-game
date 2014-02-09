var test = require('tape');
var fs = require('fs');

test('the master config file exists', function (t) {
    t.plan(1);
    t.doesNotThrow(function () {
        fs.readFileSync('config.json');
    });
});

test('the master config file is valid', function (t) {
    t.plan(1);
    var config = fs.readFileSync('config.json');
    t.doesNotThrow(function () {
        JSON.parse(config);
    });
});
