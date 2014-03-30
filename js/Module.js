var Module = function(_developersPerCity, _cost){
    this.progress = 0;
    this.developersPerCity = _developersPerCity;
    this.cost = _cost + _cost*0.25*(Math.random() - 0.5);
    this.stalled = 0;
};

Module.prototype.getPercentComplete = function getPercentComplete () {
    return (this.progress/this.cost)*100;
};

Module.prototype.setPercentComplete = function (percent)
{
    this.progress = percent*this.cost;
};

Module.prototype.done = function done () {
    return this.progress >= this.cost;
};

Module.prototype.stall = function stall (duration) {
    this.stalled = duration;
};

Module.prototype.advance = function advance (cities) {
    if (this.stalled > 0) {
        this.stalled --;
        return;
    } else if(!this.done()) {
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
};

Module.prototype.calculateMaximalProgressPerCycle = function calculateMaximalProgress() {
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

Module.prototype.isBehindSchedule = function isBehindSchedule (currentWeek) {
      var completion = module.getPercentComplete();
      return (completion < module.calculateMaximalProgressPerCycle() * currentWeek);
};

module.exports = Module;
