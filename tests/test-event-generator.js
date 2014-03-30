var test = require('tape');
var FuzzyEngine = require("../js/EventGenerator/fuzzyEngine.js");
var InferenceEngine = require("../js/EventGenerator/inferenceEngine.js");
var Fuzzifier = require("../js/EventGenerator/fuzzifier.js");
var EventGenerator = require("../js/EventGenerator/EventGenerator.js");
var events = require("../config/events.json");
var client = require("../config/client-config.json");

test("InferenceEngine is working",function(t){
	t.plan(4);

	// Two variables with 2 options
	var vars = [2,2];
	// fire if v1==1 && v2==2;
	var rule1 = [[1],[2]];
	// fire if v1==2 && ( v2==1 || v2 == 2);
	var rule2 = [[2],[1,2]];
	var rules = [rule1,rule2];

	var engine  = null; 

	t.doesNotThrow(function(){
		engine = new InferenceEngine(vars,rules);
	});
	
	var res = null;
	t.doesNotThrow(function(){
		res = engine.getRulesToFire([[1],[2]]).toString();
	});

	t.equal(res.length, 2,"returns back bit-array of the right length");

	t.equal(res.toString() ,"10","its selecting the right rules");

}); 

test("Fuzzifier is working",function(t){
	t.plan(4);

	// membership values with two variables with v1 having one option
	// and v2 having two options
	var v1 = [[1,4,8]],
		v2 = [[1,2,4],[2,6,10]],
		membershipValues = [v1,v2],
		fuzzifier = null;

	t.doesNotThrow(function(){
		fuzzifier = new Fuzzifier(membershipValues );
	});

	var val = null;
	t.doesNotThrow(function(){
		val = fuzzifier.getMembershipsValues([4,3]);
	});
	t.deepEqual(val,[[1,1],[1,0.5,0.25]]);
	t.deepEqual(fuzzifier.getMembershipsValues([4,9]),[[1,1],[1,0,0.25]]);
});

test("the fuzzy engine is working",function(t){
	t.plan(4);
	var fuzzy = null;

	t.doesNotThrow(function(){
		var rules = [
				[[1,3]  ,  [0] ],
				[[1,2]  ,  [0] ],
				[[1,3]  ,  [0] ] ];

		var memberFuncs =[[[10,20,30],[40,50,80],[45,50,90]],[[40,50,80]]];

		fuzzy = new FuzzyEngine(rules, memberFuncs);
	});

	// this should make rule 1 fire 
	// all three rules will fire
	t.equal(fuzzy.run([20,50],0.1),0);

	// only the rule 0,2 should fire and rule 0 should be not counted as it has just been seen
	t.equal(fuzzy.run([85,50],0.1),2,"make sure same event can't happen twice in a row");

	// rule 2 should be discounted and rule 0 should be down to 0.66/1.666 while rule one should have a 1/1.6 chance
	t.equal(fuzzy.run([20,50],0.45),1,"make sure event generation is considering time");
});

test("Event generator works", function(t){
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
