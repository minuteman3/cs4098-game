var InferenceEngine = require("./inferenceEngine.js");
var Fuzzifier = require("./fuzzifier.js");

var FuzzyEngine = function(_rules, _memfuncs){


	this.rules = _rules.slice(0);
	this.memfuncs = _memfuncs.slice(0);
	this.vars = this.memfuncs.map(function(a){return a.length;});

	// keep track of when rule was fired
	this.tick = 0;
	this.rulesFired = Array.apply(null, new Array(this.rules.length)).map(Number.prototype.valueOf,0);


	this.fuzzifier = new Fuzzifier(this.memfuncs);
	this.engine = new InferenceEngine(this.vars,this.rules);

};

FuzzyEngine.prototype.run = function(variables,randNum)
{

	this.tick++;

	var varVals = this.fuzzifier.getMembershipsValues(variables);

	var NonZeroVars = GetNonZeroVariables(varVals);
	var rulesToCall = this.engine.getRulesToFire(NonZeroVars);


	var weightedRules = [];
	var totalWeight = GetWeightedRules(rulesToCall,varVals,weightedRules,
							this.rulesFired, this.tick, this.rules);


	var ruleToFire = GetRuleToCall(weightedRules,totalWeight,randNum);

	this.rulesFired[ruleToFire] = this.tick;
	return ruleToFire;

};

function GetWeightedRules(rulesToCall,varVals,weightedList,rulesFired,tick,rules){

	var totalWeight = 0;
	var totalRules = rulesToCall.count();

	for(var i = 0;i < rulesToCall.length;i++){
		if(rulesToCall.get(i))
		{
			var weight = GetWeight(varVals,rules[i]);

			diff = tick - rulesFired[i];

			// make sure this event hasn't came up, so that 
			// if event appeared in t
			if((diff > (totalRules/2)) || rulesFired[i]===0 ){
				weight *= diff/tick;
				totalWeight += weight;
				weightedList.push([weight,i]);
			}
		}
	}

	return totalWeight;
}

function GetRuleToCall(weightedRules,totalWeight,randNum){
	var seenWeights = 0;
	randNum *= totalWeight;

	for(var i =0;i<weightedRules.length;i++){
		seenWeights += weightedRules[i][0];
		if(randNum <= seenWeights)
			return weightedRules[i][1];
	}

	throw "no rule was called";
}

function GetNonZeroVariables(varVals){
	var varsCalled = [];

	for(var i = 0 ; i < varVals.length;i++)
	{
		varsCalled[i] = [];
		for(var j = 0;j < varVals[i].length;j++){
			if(varVals[i][j]>0)varsCalled[i].push(j);	
		}
	}
	return varsCalled;
}


// We do the min(max) rule
//         VarA             VarB             
// so (Large or Small) And Fast
// min((    max      ),   (max))
function GetWeight(results,rules){
	var min = 100;

	// iterate over every variable that must fire
	for(var i = 0;i<rules.length;i++){
		var max = 0;
		// iterate over option that fires
		for(var j=0;j<rules[i].length;j++){
			var val = results[i][rules[i][j]];
			if(val > max)max=val; 
		}
		if(max < min)
			min = max;
	}
	return min;
}
module.exports = FuzzyEngine;