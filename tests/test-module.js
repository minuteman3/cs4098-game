var test = require('tape');
var Module = require('../js/Module.js');
var City = require("../js/city.js");

test('Module:', function(t) {
    t.plan(19);

    var mod = null;

    t.doesNotThrow(function(){
        mod = new Module(
                {
                    "Dublin": 1,
                    "Mumbai": 1
                },
                300,
                "test"
                );
    });

    var modules = [mod];

    var dublin = 
    {
        "coords": [
            37.6788056,
            -122.2880726
        ],
        "name": "Dublin",
        "morale": 100,
        "productivity": 100,
        "costPerWeek": 6000,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    };

    var mumbai = 
    {
        "coords": [
            40.43,
            -74
        ],
        "name": "Mumbai",
        "morale": 100,
        "productivity": 100,
        "costPerWeek": 500,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    };

    
    var citiesState = {
        "Dublin" : new City(dublin, dublin, modules),
        "Mumbai" : new City(mumbai, dublin, modules)
    };
    
    t.doesNotThrow(function(){
        mod.advance(citiesState);
    },'advance');
   
    t.ok(53 < mod.getPercentComplete() && mod.getPercentComplete() < 89 , 'getPercentComplete');
    
    mod.setPercentComplete(45);
    t.equals(mod.getPercentComplete(),45,'setPercentComplete');

    t.equals(mod.getCost(citiesState),6500,'getCost');

    t.equals(mod.getStage(),1,"getStage");

    t.equals(mod.isStalled(),false,"isStalled");

    t.doesNotThrow(function(){
           mod.stall(1);
    },'advance');
  
    t.equals(mod.isStalled(),true,"isStalled");

    t.equals(mod.hasCity("Dublin"),true,"hasCity");
    t.equals(mod.hasCity("New York"),false,"hasCity");

    
    mod.setPercentComplete(0); // clean slate
    
    mod.stall(1);
    mod.advance(citiesState);

    t.ok(mod.isBehindSchedule(2,citiesState) === true,'isBehindSchedule');
    
    t.doesNotThrow(function(){
        mod.calculateMaximalProgressPerCycle(citiesState);
    },"calculateMaximalProgressPerCycle");
    t.ok(mod.getPercentComplete() === 0, 'stall');
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() > 0, 'stall');

    mod = new Module(
                {
                    "Dublin": 1
                },
                300,
                "test"
                );

    citiesState = {
        "Dublin" : new City(dublin, dublin, modules),
    };
    t.ok(!mod.done(),'done');
    
    citiesState.Dublin.morale = 0;
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() === 0, 'morale');

    citiesState.Dublin.morale = 50;
    mod.advance(citiesState);
    var progress50 = mod.getPercentComplete();
    t.ok(mod.getPercentComplete() > 0, 'morale');
    
    citiesState.Dublin.morale = 100;
    mod.advance(citiesState);
    var progress100 = mod.getPercentComplete() - progress50;
    t.ok(Math.abs(progress100 - (2 * progress50) < 0.000001), 'morale');
});
