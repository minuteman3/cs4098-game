var test = require('tape');
var Module = require("../js/Module.js");
var City = require("../js/city.js");


test('city: class works', function (t) {
    t.plan(17);

    var city = 
    {
        "coords": [
            0,
            0
        ],
        "name": "San Francisco",
        "morale": 100,
        "productivity": 200,
        "costPerWeek": 12000,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    };

    var homeCity = 
    {
        "coords": [
            10,
            0
        ],
        "name": "Dublin",
        "morale": 100,
        "productivity": 125,
        "costPerWeek": 7500,
        "language": "english",
        "west": true,
        "highContext": true,
        "nationCulture": "european",
        "organizationalCulture": "undefined"
    };

    var c = null;
    t.doesNotThrow(function () {
        var modules = [new Module({"dublin": 1}, 100, "test")];
        c = new City(city, homeCity, modules);
    });
    
    t.equal(c.costPerDeveloper, 12000);
    t.equal(c.productivity, 200);

    t.equal(c.calculateGeoDistance(city, homeCity),480)
    t.equal(c.calculateCulturalDistance(city, homeCity),5)

    t.equal(c.getGeoDist(city, homeCity),480)
    t.equal(c.getCulturalDist(city, homeCity),5)

    t.equal(c.morale,100);
    
    t.equal(c.progress(0),0,'city progress works');
    t.ok(c.progress(1)>0,'city progress works');

    t.doesNotThrow(function(){
        c.cost();
    },'city cost')

    t.equals(c.status(),3,'city status');

    c.setMorale(120);
    t.equals(c.morale,120,'city setMorale');

    c.modifyMorale(-30);
    t.equals(c.morale,90,'city modifyMorale');

    c.stall(10);
    t.equals(c.stalled,10,'city stall');

    t.equals(c.idealProgress(0),0,'city idealProgress');
    t.equals(c.idealProgress(1),200,'city idealProgress');

});
