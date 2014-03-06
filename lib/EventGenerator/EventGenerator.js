var diveSync = require("diveSync");
var fs = require("fs");

var FuzzyEngine = require("./fuzzyEngine.js");

var EventGenerator = function(dir){
    this.events = [];
    this.loadDir(dir);
    this.engine = loadFuzzyEngine(this.events);
};

function loadFuzzyEngine(events){
    var fuzzyRules = [];

    for(var i = 0; i < events.length; i++) {   
                          //Morale  // Pay  
        var conditions = [[0,1,2],  [0,1,2]]; // 0,1,2 allows the event to occur for any val of this var

        if('morale' in events[i].conditions) {
            conditions[0] = events[i].conditions.morale;
        }

        if('pay' in events[i].conditions) {
            conditions[1] = events[i].conditions.pay;
        }

        fuzzyRules.push(conditions);
    }
	
    // TODO: placeholder
    //                // Morale                          // Pay
    var memberFuncs =[[[10,20,30],[40,50,80],[45,50,90]],[[1000,2000,3000],[4000,5000,8000],[4500,5000.9000]]];

    return new FuzzyEngine(fuzzyRules, memberFuncs);
}

EventGenerator.prototype.loadDir = function(dir){
    var that = this;

    diveSync(dir, function(err, file)
        {
            if(err) throw err;
            
            var data = JSON.parse(fs.readFileSync(file));
            that.events.push.apply(that.events, data.events);
        });
};

EventGenerator.prototype.getEvent = function(variables){
    // 50% chance to return an event
    if(Math.random() > 0.5) {
        return this.events[this.engine.run(variables, Math.random())];
    } else {
        return null;
    }
};

module.exports = EventGenerator;