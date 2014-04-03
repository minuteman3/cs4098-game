var test = require('tape');

var ProcessSim = require("../js/ProcessSimulator.js");
var events = require("../config/events.json");
var config = require("../config/client-config.json");
var Module = require("../js/Module.js");
var City = require("../js/city.js");

test("process simulator: works", function(t) {
	t.plan(6);
	var citiesState={};
	var modules = [];
	t.doesNotThrow(function(){
		// citiesState = {c.name: new City(c.name,c.costPerWeek,c.productivity) };
		citiesState = {
			"Dublin" : new City("Dublin",6000,100),
			"Mumbai" : new City("Mumbai",500,100)
		};
	},'add cities');
	t.doesNotThrow(function(){
		modules.push(
			new Module( 
				{
					"Dublin": 1,
					"Mumbai": 1
				},
				400,
                "test"
			)
		); 
	},'add modules');
	var rate = config.eventRate;
	t.doesNotThrow(function(){
	// function start(_modules,_cities, _updateFunc, _doneFunc, _eventFunc, events){
		ProcessSim.start(modules, citiesState,function(){}, function() {
			var done = true;

			modules.forEach(function(module) {
				done = done && module.done();
			});
			t.doesNotThrow(function(){
				ProcessSim.pause();
			},'pause()');
			t.doesNotThrow(function(){
				ProcessSim.unpause();
			},'unpause()');
			// at this point, done should still be true, or else timerLoop is borken
			t.ok(done, 'timerLoop()');
			ProcessSim.stop();
		},function(){}, function() {return modules[0];}, events,rate);
	},'start()');
});
