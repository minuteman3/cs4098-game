var test = require('tape');

var ProcessSim = require("../js/ProcessSimulator.js");
var events = require("../config/events.json");
var config = require("../config/client-config.json");
var Module = require("../js/Module.js");
var City = require("../js/city.js");

test("process simulator: works", function(t) {
	t.plan(5);
	var citiesState={};
    var modules = [new Module({"Dublin": 1, "Mumbai": 1}, 400, "test")];

	t.doesNotThrow(function(){
        var dublin = 
        {
            "coords": [
                37.6788056,
                -122.2880726
            ],
            "name": "Dublin",
            "morale": 100,
            "productivity": 200,
            "costPerWeek": 12000,
            "language": "english",
            "west": true,
            "highContext": false,
            "nationCulture": "american",
            "organizationalCulture": "undefined"
        };

        var mumbai = 
        {
            "coords": [
                40.43,
                -74
            ],
            "name": "Mumbai",
            "morale": 100,
            "productivity": 125,
            "costPerWeek": 7500,
            "language": "english",
            "west": true,
            "highContext": false,
            "nationCulture": "american",
            "organizationalCulture": "undefined"
        };

        
		citiesState = {
            "Dublin" : new City(mumbai, dublin, modules),
			"Mumbai" : new City(dublin, dublin, modules)
		};
	},'add cities');
	
    var rate = config.eventRate;
	t.doesNotThrow(function(){
		ProcessSim.start(modules, citiesState,function(){}, function() {
			var done = true;
            
			modules.forEach(function(module) {
				done = done && module.done();
			});
			
            // at this point, done should still be true, or else timerLoop is borken
			t.ok(done, 'timerLoop()');

			t.doesNotThrow(function(){
				ProcessSim.pause();
			},'pause()');
			t.doesNotThrow(function(){
				ProcessSim.unpause();
			},'unpause()');

			ProcessSim.stop();
		},function(){}, function() {return modules[0];}, events,rate);
	},'start()');
});
