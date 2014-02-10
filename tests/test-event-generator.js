var test = require('tape');
var FuzzyEngine = require("../lib/EventGenerator/fuzzyEngine.js")
var InferenceEngine = require("../lib/EventGenerator/inferenceEngine.js")
var Fuzzifier = require("../lib/EventGenerator/fuzzifier.js")

test("the inference engine is working",function(t){
	t.plan(4);

	// Two variables with 2 options
	var vars = [2,2];
	// fire if v1==0 && v2==1;
	var rule1 = [[0],[1]];
	//fire if v1==1 && ( v2==0 || v2 == 1);
	var rule2 = [[1],[0,1]];
	var rules = [rule1,rule2];

	var engine  = null; 

	t.doesNotThrow(function(){
	   engine = new InferenceEngine(vars,rules);
	});
	
	var res = null;
	t.doesNotThrow(function(){
		res = engine.getRulesToFire([[0],[1]]).toString()
	});
	
	t.equal(res.length, 2,"returns back bit-array of the right length")


	t.equal(res.toString() ,"10","its selecting the right rules");

}); 


test("the fuzzifier is working",function(t){
	t.plan(4);

	// membership values with two variables with v1 having one option
	// and v2 having two options
	var v1 = [[1,4,8]] 
	var v2 = [[1,2,4],[2,6,10]]
	var membershipValues = [v1,v2]
	var fuzzifier = null;

	t.doesNotThrow(function(){
		fuzzifier = new Fuzzifier(membershipValues );
	});

	var val = null;
	t.doesNotThrow(function(){
		val = fuzzifier.getMembershipsValues([4,3]);
	});
	t.deepEqual(val,[[1],[0.5,0.25]]);
	t.deepEqual(fuzzifier.getMembershipsValues([4,9]),[[1],[0,0.25]]);
});

test("the fuzzy engine is working",function(t){
	t.plan(2);
	var fuzzy = null;

	t.doesNotThrow(function(){
		fuzzy = new FuzzyEngine();
	});

	t.equal(fuzzy.run([20,50],0.7),2);
});
















