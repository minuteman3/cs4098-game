var BitArray = require('bit-array');




// varOptCnts expext  the number of options for each variable
// rules should be given with the option selected for each rule
var InferenceEngine = function(varOptCnts,rules){
	// varOptBitMatches is a double array of bit-array 
	// where varOptBitMatches[variable][option]
	// each option contains a bitarray of which rules can fire when its true

	this.varOptBitMatches = new Array(varOptCnts.length);
	this.ruleCount = rules.length;

	this.varOptCnts = varOptCnts;


	// init the varOptBitMatches
	for(var i = 0;i<varOptCnts.length;i++)
	{
		this.varOptBitMatches[i]  = new Array(varOptCnts[i]);
		for(var j = 0;j<varOptCnts[i];j++)
		{
			this.varOptBitMatches[i][j] = new BitArray(this.ruleCount);
		}
	}

	// set all the rules
	for(var i = 0; i < rules.length;i++){
		//iterate through variables
		for(var j=0;j<rules[i].length;j++)
		{
			// iterate through possible options
			for(var k =0;k<rules[i][j].length;k++){
				
				this.varOptBitMatches[j][rules[i][j][k]].set(i,true);
			}
		}
	}

};


/*
*    Takes in the indexs of all the values that fired and then returns
*    the set of all valid rules.
*/ 
InferenceEngine.prototype.getRulesToFire = function(variables){
	if(variables.length != this.varOptCnts.length) throw "Wrong number of variables supplied";
	 
	// its faster to copy the first bitArray than set a bitArray to all ones
	var matches = this.GetRulesToFireInVariable(0,variables[0]);
	
	for(var i = 1;i<variables.length;i++)
	{
		matches.and( this.GetRulesToFireInVariable(i,variables[i]) );
	}
	return matches;
}

InferenceEngine.prototype.GetRulesToFireInVariable = function(variable,options){
	var match = new BitArray(this.ruleCount);
	for(var i=0;i<options.length;i++)
	{
		var index = options[i];
		if(index >= this.varOptCnts[variable]) throw "Option out of range";
		match.or( this.varOptBitMatches[variable][index] );
	}
	return match;
} 




 module.exports = InferenceEngine;









