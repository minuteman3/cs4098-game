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

