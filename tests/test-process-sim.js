var test = require('tape');

var ProcessSim = require("../js/ProcessSimulator.js");
var events = require("../config/events.json");
var config = require("../config/client-config.json");
var Module = require("../js/Module.js");
var City = require("../js/city.js");

test("process simulator works", function(t) {
	t.plan(5);
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
			},'ProcessSim.pause()');
			t.doesNotThrow(function(){
				ProcessSim.unpause();
			},'ProcessSim.unpause()');
			t.ok(done, 'all modules done');
			ProcessSim.stop();
		},function(){},events,rate);
	},'ProcessSim.start()');
});