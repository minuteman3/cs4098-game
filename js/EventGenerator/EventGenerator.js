var FuzzyEngine = require("./fuzzyEngine.js");
var config = require("../../config/client-config.json");
var deepcopy = require('deepcopy');


var EventGenerator = function(events,rate){
    this.events = events || [];
    this.rate = (rate/100);
    this.lastEvent = 1;
    this.engine = loadFuzzyEngine(this.events);
};

function loadFuzzyEngine(events){

        var memberFuncs = [
    getMemValues( config.moraleFuzzification), 
    getMemValues( config.payFuzzification ),
    getMemValues( config.completionFuzzification),
    getMemValues( config.geoDistFuzzification),
    getMemValues( config.culturalDistFuzzification),
     ];

    var fuzzyRules = [];

    for(var i = 0; i < events.length; i++) {   
                          
        var conditions = memberFuncs.map(function(){return [0];});

        if('morale' in events[i].conditions) {

            conditions[0] = getConditions(events[i].conditions.morale,config.moraleFuzzification) ;
        }

        if('pay' in events[i].conditions) {
            conditions[1] = getConditions(events[i].conditions.pay,config.payFuzzification) ;
        }

        if('progress' in events[i].conditions) {
            conditions[2] = getConditions(events[i].progress,config.completionFuzzification) ;
        }

        if('geoDistance' in events[i].conditions) {
            conditions[3] = getConditions(events[i].progress,config.geoDistFuzzification) ;
        }

        if('culturalDistance' in events[i].conditions) {
            conditions[3] = getConditions(events[i].progress,config.culturalDistFuzzification) ;
        }

        fuzzyRules.push(conditions);
    }
	


    return new FuzzyEngine(fuzzyRules, memberFuncs);
}


function getMemValues(memValObject){
    values =  memValObject.map(function(x){ return x.values;});
    return values;
}
function getConditions(conditions,fuzzyValue){
    if(!conditions)return [0];

    return conditions.map(function(value){
        for(var i = 0; i < fuzzyValue.length; i++){
           if(fuzzyValue[i].option == value)
                return i + 1; 
        }

        return 0;
    });

}

EventGenerator.prototype.getEvent = function(variables){
    // rate% chance to return an event
    // make it more likely to be event if no events have fired
    if(Math.random() + this.lastEvent*0.02 > (1-this.rate)) {
        this.lastEvent = 1;
        return deepcopy(this.events[this.engine.run(variables, Math.random())]);

    } else {
        this.lastEvent += 1;
        return null;
    }
};
module.exports = EventGenerator;
