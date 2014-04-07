var States = {
    GRAY:0,
    RED:1,
    YELLOW:2,
    GREEN:3,
};

var City = function(city,homeCity,cityMods){
    this.name = city.name;
    this.costPerDeveloper = city.costPerWeek;
    this.productivity = city.productivity;
    this.geoDistance = this.calculateGeoDistance(city,homeCity);
    this.culturalDistance = this.calculateCulturalDistance(city,homeCity);
    this.morale = 100;
    this.stalled = 0;
    this.cityMods = cityMods;
};

City.prototype.calculateCulturalDistance = function calculateCulturalDistance(city,homeCity){
    var culturalDist = city.language !== homeCity.language ? 4:0;
    culturalDist += city.west !== homeCity.west ? 3:0;
    culturalDist += city.highContext !== homeCity.highContext ? 3:0;
    culturalDist += city.nationCulture !== homeCity.nationCulture ? 2:0;
    culturalDist += city.organizationalCulture !== homeCity.organizationalCulture ? 1:0;

    return culturalDist;
}

City.prototype.calculateGeoDistance= function calculateGeoDistance(city,homeCity){

    var X1= city.coords[0];
    var Y1 = city.coords[1];
    var X2 = homeCity.coords[0];
    var Y2 = homeCity.coords[1];

    // multiply by 48 to give us an distance closer to miles
    return Math.sqrt(Math.pow((X1 -X2),2) + Math.pow((Y1 - Y2),2))*48;

}


City.prototype.advance = function(){
    if (this.stalled > 0) {
        this.stalled --;
    }
};

City.prototype.progress = function( developerCount){
     
    if (this.stalled > 0) {
        return 0;
    } else{
        return this.idealProgress(developerCount) * (this.morale / 100);
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
    if(this.cityMods.length){
        if(this.stalled > 0 || this.morale < 10){
            return States.RED;
        }
        else if(this.cityMods.some(function(x){ return x.isStalled();}) || this.morale < 50){
            return States.YELLOW;
        }else{
            return States.GREEN;
        }
    }else{ 
        return States.GRAY;
    }
};

City.prototype.stall = function stall(duration){
    this.stalled = duration;
};

City.prototype.modifyMorale = function modifyMorale(mod){
    this.morale = this.morale + mod;
    if (this.morale < 0) this.morale = 0;
};

City.prototype.setMorale = function setMorale(morale) {
    this.morale = morale;
    if (this.morale < 0) this.morale = 0;
};

City.prototype.getGeoDist = function getGeoDist(){
    return this.geoDistance;
};

City.prototype.getCulturalDist = function getCulturalDist(){
    return this.culturalDistance;
};

module.exports = City;
