var test = require('tape');
var city = require("../js/city.js");

test('city: class works', function (t) {
    t.plan(4);

    var c = null;
    t.doesNotThrow(function () {
        c = new city("dublin", 100, 200);
    });

    t.equal(c.costPerDeveloper, 100);
    t.equal(c.productivity, 200);

    t.equal(c.morale,100);
});

test('city:', function (t) {
    t.plan(10);

    var c = null;
    t.doesNotThrow(function () {
        c = new city("dublin", 100, 200);
    },'new city works');

    t.equal(c.progress(0),0,'city progress works');
    t.ok(c.progress(1)>0,'city progress works');

    t.doesNotThrow(function(){
        c.cost();
    },'city cost');
    t.equals(c.status(),3,'city status');

    c.setMorale(120);
    t.equals(c.morale,120,'city setMorale');

    c.modifyMorale(-30);
    t.equals(c.morale,90,'city modifyMorale');

    c.stall();
    t.equals(c.status(),2,'city stall');

    t.equals(c.idealProgress(0),0,'city idealProgress');
    t.equals(c.idealProgress(1),200,'city idealProgress');
});