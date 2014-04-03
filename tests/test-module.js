var test = require('tape');
var Module = require('../js/Module.js');
var City = require("../js/city.js");

test('Module:', function(t)
{
    t.plan(3);

    var mod = new Module(
                {
                    "Dublin": 1,
                    "Mumbai": 1
                },
                300,
                "test"
                );
    var citiesState = {
            "Dublin" : new City("Dublin",6000,100),
            "Mumbai" : new City("Mumbai",500,100)
        };
    t.doesNotThrow(function(){
        mod.advance(citiesState);
    },'advance');
    // 100%/300(±25%)*Developers*100%
    t.ok(53 < mod.getPercentComplete() && mod.getPercentComplete() < 89 , 'getPercentComplete');
    
    mod.setPercentComplete(0.45);
    t.equals(mod.getPercentComplete(),45,'setPercentComplete');
});

test('Module: stall', function (t) {
    t.plan(4);
    var mod = new Module({
                    "Dublin": 1
                  }, 300, "test");
    var citiesState = {
        "Dublin": new City("Dublin",6000,100)
    };
    mod.stall(1);
    mod.advance(citiesState);

    t.ok(mod.isBehindSchedule(2,citiesState) === true,'isBehindSchedule');
    t.doesNotThrow(function(){
        mod.calculateMaximalProgressPerCycle(citiesState);
    },"calculateMaximalProgressPerCycle");
    t.ok(mod.getPercentComplete() === 0, 'stall does not advance');
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() > 0, 'stall advances when over');
});

test('Module: Morale effects productivity', function(t) {
    t.plan(4);
    var mod = new Module( {
                    "Dublin": 1,
                }, 300, "test");
    var citiesState = {
            "Dublin" : new City("Dublin",6000,100)
    };
    t.ok(!mod.done(),'done');
    citiesState.Dublin.morale = 0;
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() === 0, 'morale affects progress (0 progress at 0)');
    citiesState.Dublin.morale = 50;
    mod.advance(citiesState);
    var progress50 = mod.getPercentComplete();
    t.ok(mod.getPercentComplete() > 0, 'morale affects progress non-zero');
    citiesState.Dublin.morale = 100;
    mod.advance(citiesState);
    var progress100 = mod.getPercentComplete() - progress50;
    t.ok(Math.abs(progress100 - (2 * progress50) < 0.000001), 'morale scales progress');
});
