var client     = require('./../config/client-config.json');


var Module = function(_developersPerCity, _cost, _name){
    this.progress = 0;
    this.developersPerCity = _developersPerCity;
    this.cost = _cost + _cost*0.25*(Math.random() - 0.5);
    this.name = _name;
    this.stalled = 0;
    this.name = _name;
    this.weeks = 0;
};



Module.prototype.getPercentComplete = function getPercentComplete () {
    return (this.progress/this.cost)*100;
};

Module.prototype.setPercentComplete = function setPercentComplete (percent)
{
    this.progress = (percent/100)*this.cost;
};

Module.prototype.done = function done () {
    return this.progress >= this.cost;
};

Module.prototype.stall = function stall (duration) {
    this.stalled = duration;
};

// -1 stands for don't care
Module.prototype.advance = function advance (cities,stage) {


    if(stage != null){
        var s = this.getStage();
        if(stage != s)
            return s;
    }

    if (this.stalled > 0) {
        this.stalled --;
        return;
    } 
    else if(!this.done()) {
        var progressThisCycle = 0;
        var devs = this.developersPerCity;
        Object.keys(devs).forEach(function(key) {
            progressThisCycle += cities[key].progress(devs[key]);
        });

        this.progress += progressThisCycle;

        if(this.progress > this.cost){
            this.progress = this.cost;
        }
    }

    if(stage != null){
        var upperBound = client.completionFuzzification[stage].values[2];
        var percet  = this.getPercentComplete();


        if(percet > upperBound)
        {

            this.setPercentComplete(upperBound + 1);
        }

        return this.getStage();
    }

};

Module.prototype.calculateMaximalProgressPerCycle = function calculateMaximalProgress(cities) {
    var devs = this.developersPerCity,
        idealProgress = 0;
    Object.keys(devs).forEach(function(key) {
        idealProgress += cities[key].idealProgress(devs[key]);
    });
    return idealProgress;
};

Module.prototype.getCost = function getCost (cities) {
    var devs = this.developersPerCity;
    var cost = 0;
    Object.keys(this.developersPerCity).forEach(function(key) {
        var developers = devs[key];
        cost += cities[key].cost(developers);
    });
    return cost;
};

Module.prototype.getStage = function getStage () {
    var stages = client.completionFuzzification;
    var percet  = this.getPercentComplete();
    for(var i = 0; i < stages.length;i++){

        if( percet >= stages[i].values[0] && percet <= stages[i].values[2])
            return i;

    }
};

Module.prototype.getStageName = function getStageName () {
    var stages = client.completionFuzzification;
    var percet  = this.getPercentComplete();
    for(var i = 0; i < stages.length;i++){

        if( percet >= stages[i].values[0] && percet <= stages[i].values[2])
            return stages[i].option;
    }
};

Module.prototype.hasCity = function hasCity (city) {
    return this.developersPerCity[city] > 0;
};

Module.prototype.isStalled = function isStalled(){
    return  (this.done() || this.stalled > 0);
};

Module.prototype.isBehindSchedule = function isBehindSchedule (currentWeek,cities) {
      var completion = this.getPercentComplete();
      return (completion < this.calculateMaximalProgressPerCycle(cities) * currentWeek);
};

module.exports = Module;
