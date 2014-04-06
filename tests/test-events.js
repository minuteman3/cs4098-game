var test = require('tape');
var events = require("../js/events.js");
var City = require("../js/city.js");

test("events:", function(t){
    t.plan(2);

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
        "city": new City("Dublin", 300, 30),
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

