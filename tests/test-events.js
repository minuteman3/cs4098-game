var test = require('tape');
var events = require("../js/events.js");
var City = require("../js/city.js");
var Module = require("../js/Module.js");

test("events:", function(t){
    t.plan(2);

    var city = 
    {
        "coords": [
            37.6788056,
            -122.2880726
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
            40.43,
            -74
        ],
        "name": "New York",
        "morale": 100,
        "productivity": 125,
        "costPerWeek": 7500,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    };

    var modules = [new Module({"dublin": 1}, 100, "test")];
    var c = new City(city, homeCity, modules);
 

    var e = {
        "conditions": {},
        "message": "The manager at $site has slipped on a banana peel and died. What do you do?",
        "effects": {
            "morale": -20
        },
        "actions": [
            {
                "message": "Wing it",
                "effects": {}
            }
        ],
        "city": c,
        "module":{
            "name": "test"
        }
    };

    t.doesNotThrow(function() {
        events.trackEvent(e);
    },"trackEvent()");

    t.doesNotThrow(function() {
		events.doEvent(0);
    },"doEvent()");

});

