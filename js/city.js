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
    this.highContext = city.highContext;
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
    if (this.stalled > 1) {
        this.stalled --;
    }else{
        this.stalled =0;
    }
};

City.prototype.progress = function( developerCount){
     
    if (this.stalled > 1) {
        return 0;
    }else if (this.stalled > 0) {
        return this.idealProgress(developerCount) * (this.morale / 100)*(this.stalled - 1);
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
    this.stalled += duration;
};

City.prototype.modifyMorale = function modifyMorale(mod){
    this.morale = this.morale + mod;
    if (this.morale < 0) this.morale = 0;
    if (this.morale > 150) this.morale = 150;
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

City.prototype.inquire = function(type) {
    if(type === 0)
    {
        var isonSchedule = (this.highContext || (this.stalled < 1 && this.morale > 50 && !this.cityMods.some(function(x){ return x.isStalled();})));
        return isonSchedule?"Is on Schedule":"Is falling behind";   

    }else if(type === 1){
        var html = "";
        // misses out on half a day
        this.stalled += 0.1;
        this.cityMods.forEach(function(module){
            if(module.done())
                html += module.name + " has finished."
            else
                html += module.name  + " is " + ((module.isStalled() && !this.highContext)?" behind":" fine") + "</br>"; 
        });
        return html;

    }else if(type === 2){
        var html = "";
        // misses out on a day
        this.stalled += 0.2;
        this.cityMods.forEach(function(module){
            if(module.done())
                html += module.name + " has finished."
            else
                html += module.name  + " is currently doing " + module.getStageName() + "</br>"; 
        });
        return html;

    }else if(type === 3){
        var html = "";
        // misses out on half week of work
        this.stalled += 0.5;
        this.cityMods.forEach(function(module){
            if(module.done())
                html += module.name + " has finished."
            else
                html += module.name  + " is currently doing " + module.getStageName() + " and is " + ((module.isStalled() && (!this.highContext|| (Math.random()>0.5)))?" behind":" fine") + "</br>"; 
        });
        return html;

    }else if(type === 4){
        var html = "";
        // misses out on week worth of work
        this.stalled += 1;
        this.cityMods.forEach(function(module){
            if(module.done())
                html += module.name + " has finished."
            else
                html += module.name  + " is currently doing " + module.getStageName() + " and is " + (module.isStalled()?" behind":" fine") + "</br>"; 
        });
        return html;
    }



};

module.exports = City;
