var test = require('tape');
var events = require("../js/events.js");

test("events: Event generator works", function(t){
    t.plan(2);

    var gen = null;
    var rate = 100;
    
    t.doesNotThrow(function() {
        gen = new EventGenerator(events,rate);
    });

    t.doesNotThrow(function() {
        gen.getEvent([20,4000,20]);
    });
});

