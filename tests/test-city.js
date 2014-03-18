var test = require('tape');
var city = require("../js/city.js");

test('city class works', function (t) {
    t.plan(5);

    var c = null;
    t.doesNotThrow(function () {
        c = new city("dublin", 100, 200);
    });

    t.equal(c.costPerDeveloper, 100);
    t.equal(c.productivity, 200);

    t.ok(c.morale);

    t.doesNotThrow(function(){
        c.progress();
        c.cost();
        c.status();
    });
});
