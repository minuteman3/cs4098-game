var InferenceEngine = require("./inferenceEngine.js");
var Fuzzifier = require("./fuzzifier.js");

var FuzzyEngine = function(){
	this.rules = loadRules();
//	this.vars =  loadVariables();
	this.memfuncs = loadMemberShipFuncs();
	this.vars = this.memfuncs.map(function(a){return a.length;});
	this.fuzzifier = new Fuzzifier(this.memfuncs);
	this.engine = new InferenceEngine(this.vars,this.rules);
};

function loadRules(){
	rules = [
				[[2,0]  ,  [0] ],
				[[2,1]  ,  [0] ],
				[[0]    ,  [0] ] ];
	return rules;
}

function loadMemberShipFuncs(){
			// s         m          l
	return [[[10,20,30],[40,50,80],[45,50,90]],[[40,50,80]]];
}


FuzzyEngine.prototype.run = function(variables,randNum)
{
	var varVals = this.fuzzifier.getMembershipsValues(variables);
	
	var NonZeroVars = GetNonZeroVariables(varVals);
	var rulesToCall = this.engine.getRulesToFire(NonZeroVars);


	var weightedRules = [];
	var totalWeight = GetWeightedRules(rulesToCall,varVals,weightedRules);

	return GetRuleToCall(weightedRules,totalWeight,randNum);

} 

function GetWeightedRules(rulesToCall,varVals,weightedList){

	var totalWeight = 0;
	for(var i = 0;i < rulesToCall.length;i++){
		if(rulesToCall.get(i))
		{
			var weight = GetWeight(varVals,rules[i]);
			totalWeight += weight;
			weightedList.push([weight,i]);
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
	var varsCalled = new Array();

	for(var i = 0 ; i < varVals.length;i++)
	{
		varsCalled[i] = new Array();
		for(var  j = 0;j < varVals[i].length;j++)
		{
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












