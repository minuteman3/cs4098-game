var Module = function(_developersPerCity, _cost){
    this.progress = 0;
    this.developersPerCity = _developersPerCity;
    this.cost = _cost + _cost*0.25*(Math.random() - 0.5);
};

Module.prototype.getPercentComplete = function(){
	return (this.progress/this.cost)*100;
};

Module.prototype.done = function(){
	return this.progress >= this.cost;
};

Module.prototype.advance = function(cities){
	if(!this.done()){
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

Module.prototype.getCost = function(cities){
	var devs = this.developersPerCity;
	var cost = 0;
	Object.keys(this.developersPerCity).forEach(function(key) {
		var developers = devs[key];
		cost += cities[key].cost(developers);
	});
	return cost;
};

module.exports = Module;
