var test = require('tape');
var Module = require('../js/Module.js');
var City = require("../js/city.js");

test('Module advancement works', function(t) 
{
    t.plan(1);

    var mod = new Module(
				{
					"Dublin": 1,
					"Mumbai": 1
				},
				400
				);
    var citiesState = {
			"Dublin" : new City("Dublin",6000,100),
			"Mumbai" : new City("Mumbai",500,100)
		};
    mod.advance(citiesState);

    t.equals(50, mod.getPercentComplete());
});

