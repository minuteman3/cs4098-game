var City = function(_name,_costPerDeveloper,_baseProductivity){
    this.name = _name;
    this.costPerDeveloper = _costPerDeveloper;
    this.productivity = _baseProductivity;
    this.morale = 100;
    this._status = 0;
};

City.prototype.progress = function( developerCount){
     
    if(this._status == 3){
        return this.idealProgress(developerCount) * (this.morale / 100);
    }
    else{
        this._status += 1;
        return 0;
    }

};

City.prototype.idealProgress = function (developerCount) {
    return this.productivity * developerCount;
};

City.prototype.cost = function( developerCount){
    return (this.costPerDeveloper * developerCount);
};

City.prototype.status = function(){
    // TODO needs to return a status based on not being ok all the time
    return this._status;
};

City.prototype.stall = function stall(){
    this._status = 2;
};

City.prototype.modifyMorale = function modifyMorale(mod){
    this.morale = this.morale + mod;
    if (this.morale < 0) this.morale = 0;
    if (this.morale === 0) this._status = 1;
};

City.prototype.setMorale = function setMorale(morale) {
    this.morale = morale;
    if (this.morale < 0) this.morale = 0;
    if (this.morale === 0) this._status = 1;
};

module.exports = City;
