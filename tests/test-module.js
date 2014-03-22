var test = require('tape');
var Module = require('../js/Module.js');
var City = require("../js/city.js");

test('Module advancement works', function(t)
{
    t.plan(2);

    var mod = new Module(
                {
                    "Dublin": 1,
                    "Mumbai": 1
                },
                300
                );
    var citiesState = {
            "Dublin" : new City("Dublin",6000,100),
            "Mumbai" : new City("Mumbai",500,100)
        };
    t.doesNotThrow(function(){
        mod.advance(citiesState);
    });
    // 100%/300(±25%)*Developers*100%
    t.ok(53 < mod.getPercentComplete() && mod.getPercentComplete() < 89 , 'project cost randomisation');
});

test('Modules can be stalled', function (t) {
    t.plan(2);
    var mod = new Module({
                    Dublin: 1
                  }, 300);
    var citiesState = {
                Dublin: new City("Dublin",6000,100)
        };
    mod.stall(1);
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() === 0, 'module has not advanced when stalled');
    mod.advance(citiesState);
    t.ok(mod.getPercentComplete() > 0, 'module unstalls on its own');
});
