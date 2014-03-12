var test = require('tape');

var ProcessSim = require("../js/ProcessSimulator.js");
var Module = require("../js/Module.js");
var City = require("../js/city.js");

test("process simulator works", function(t) {
	t.plan(2);
	var citiesState={};
	var modules = [];
	t.doesNotThrow(function(){
		// citiesState = {c.name: new City(c.name,c.costPerCycle,c.productivity) };
		citiesState = {
			"Dublin" : new City("Dublin",6000,100),
			"Mumbai" : new City("Mumbai",500,100)
		};
		modules.push(
			new Module( 
				{
					"Dublin": 1,
					"Mumbai": 1
				},
				400
			)
		); 
	});

	ProcessSim.start(modules, citiesState,function(){}, function() {
		var done = true;

		modules.forEach(function(module) {
			done = done && module.done();
		});

		t.ok(done, 'all modules done');
		ProcessSim.stop();
	});
});