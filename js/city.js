


var City = function(city,homeCity){

    console.log(city);
    console.log(homeCity);

    var X1= city.coords[0];
    var Y1 = city.coords[1];
    var X2 = homeCity.coords[0];
    var Y2 = homeCity.coords[1];

    this.name = city.name;
    this.costPerDeveloper = city.costPerWeek;
    this.productivity = city.productivity;

    this.GlobalDistance = Math.sqrt(Math.pow((X1 -X2),2) + Math.pow((Y1 - Y2),2))
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

City.prototype.getGlobalDistance = function getGlobalDistance(){
    return this.GlobalDistance;
}

module.exports = City;
