


var City = function(city,homeCity){


    this.name = city.name;
    this.costPerDeveloper = city.costPerWeek;
    this.productivity = city.productivity;

    this.geoDistance = calculateGeoDistance(city,homeCity);
    this.culturalDistance = calculateCulturalDistance(city,homeCity);
    this.morale = 100;
    this._status = 0;
};

function calculateCulturalDistance(city,homeCity){

    var culturalDist = city.language === homeCity.language ? 4:0;
    culturalDist += city.west === homeCity.west ? 3:0;
    culturalDist += city.highContext === homeCity.highContext ? 3:0;
    culturalDist += city.nationCulture === homeCity.nationCulture ? 2:0;
    culturalDist += city.organizationalCulture === homeCity.organizationalCulture ? 1:0;

    return culturalDist;

}

function calculateGeoDistance(city,homeCity){

    var X1= city.coords[0];
    var Y1 = city.coords[1];
    var X2 = homeCity.coords[0];
    var Y2 = homeCity.coords[1];

    // multiply by 48 to give us an distance closer to miles
    return Math.sqrt(Math.pow((X1 -X2),2) + Math.pow((Y1 - Y2),2))*48;

}



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

City.prototype.getGeoDist = function getGeoDist(){
    return this.geoDistance;
}
City.prototype.getCulturalDist = function getGlobalDist(){
    return this.culturalDistance;
}

module.exports = City;
