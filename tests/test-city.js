var test = require('tape');
var city = require("../js/city.js");

test('city class works', function (t) {
    t.plan(4);

    var c = null;
    t.doesNotThrow(function () {
        c = new city("dublin", 100, 200);
    });

    t.equal(c.costPerDeveloper, 100);
    t.equal(c.productivity, 200);

    t.ok(c.morale);
});

test('city class inner methods work', function (t) {
    t.plan(4);

    var c = null;
    t.doesNotThrow(function () {
        c = new city("dublin", 100, 200);
    });
    t.doesNotThrow(function(){
        c.progress();
    });
    t.doesNotThrow(function(){
        c.cost();
    });
    t.doesNotThrow(function(){
        c.status();
    });
});