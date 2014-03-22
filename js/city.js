var City = function(_name,_costPerDeveloper,_baseProductivity){
    this.name = _name;
    this.costPerDeveloper = _costPerDeveloper;
    this.productivity = _baseProductivity;
    this.morale = 100;
    this._status = 0;
};

City.prototype.progress = function( developerCount){
    this._status = 3;
    return (this.productivity * developerCount * (this.morale / 100));
};

City.prototype.cost = function( developerCount){
    return (this.costPerDeveloper * developerCount);
};


City.prototype.status = function(){
    // TODO needs to return a status based on not being ok all the time
    return this._status;
};

module.exports = City;
