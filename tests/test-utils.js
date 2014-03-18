var test = require('tape');
var utils = require('./../js/utils.js');

test('revenue is calculated', function (t) {
    t.plan(1);
    var project={
		"name": "Project A",
		"budget": 10000,
		"duration": 8,
		"revenue": {
			"months": 6,
			"amount": 10000
		}
	};
    t.equals(utils.revenue(12,project),75000);
});

test('commas get inserted into money numbers',function(t){
	t.plan(3);
	t.equals(utils.commafy(123456789),"123,456,789");
	t.equals(utils.commafy(12345.32,2),"12,345.32");
	t.equals(utils.commafy(-123456),"-123,456");
});

test('contains works',function(t){
	t.plan(7);

	var teams = ["San Francisco","Dublin","New York"];
	t.equals(utils.contains(teams,"Dublin"),true);
	t.equals(utils.contains(teams,"London"),false);
	t.equals(utils.contains(teams,'Dublin'),true);
	t.equals(utils.contains(teams,'London'),false);
	t.equals(utils.contains([],null),false);
	t.equals(utils.contains([],[]),false);
	t.equals(utils.contains([],'London'),false);
});
test('getActiveCities works',function(t){
	t.plan(2);

	var teams = {
		"AI Engine": {
			"San Francisco": 1
		},
		"Real-time Physics": {
			"Dublin": 1,
			"New York": 1
		}
	};
	t.deepEqual(utils.getActiveCities(teams),["San Francisco","Dublin","New York"]);

	var teams2 = {
		"AI Engine": {
			"San Francisco": 1
		},
		"Real-time Physics": {
			"Dublin": 1,
			"New York": 1
		},
		"UX Design": {
			"Dublin": 1,
			"New York": 1
		}
	};
	t.deepEqual(utils.getActiveCities(teams2),["San Francisco","Dublin","New York"]);

});