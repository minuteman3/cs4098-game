var FuzzyEngine = require("./fuzzyEngine.js");
var config = require("../../config/client-config.json");
var deepcopy = require('deepcopy');

var EventGenerator = function(events,rate){
    this.events = events || [];
    this.rate = (rate/100);
    this.engine = loadFuzzyEngine(this.events);
};

function loadFuzzyEngine(events){
    var fuzzyRules = [];

    for(var i = 0; i < events.length; i++) {   
                          //Morale  // Pay  
        var conditions = [[0],[0],[0]]; 

        if('morale' in events[i].conditions) {
            conditions[0] = events[i].conditions.morale;
        }

        if('pay' in events[i].conditions) {
            conditions[1] = events[i].conditions.pay;
        }

        if('progress' in events[i].conditions)
        {
            conditions[2] = events[i].conditions.progress;
        }

        fuzzyRules.push(conditions);
    }
	
    var memberFuncs = [config.moraleFuzzification, config.payFuzzification, config.completionFuzzification];

    return new FuzzyEngine(fuzzyRules, memberFuncs);
}

EventGenerator.prototype.getEvent = function(variables){
    // rate% chance to return an event
    if(Math.random() > (1-this.rate)) {
        return deepcopy(this.events[this.engine.run(variables, Math.random())]);
    } else {
        return null;
    }
};
module.exports = EventGenerator;
