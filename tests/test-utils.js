var test = require('tape');
var utils = require('./../js/utils.js');

test('revenue is calculated', function (t) {
    t.plan(4);
    var project={
		"name": "Project A",
		"budget": 10000,
		"duration": 8,
		"revenue": {
			"months": 6,
			"amount": 10000
		}
	};
    t.equals(utils.revenue(8,project),60000);
    t.equals(utils.revenue(12,project),20000);
    t.equals(utils.revenue(4,project),100000);
    t.equals(utils.revenue(1,project),130000);
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

test('objectadd works', function(t){
    t.plan(3);
    var d,p,l,resultShouldBe;

    d = {"a":3};
    p = {"b":4};
    l = {"b":4,"c":5};
    resultShouldBe = {"a":3,"b":4};
    t.deepEqual(utils.objectadd(d,p), resultShouldBe);
    resultShouldBe = {"a":3,"b":4,"c":5};
    t.deepEqual(utils.objectadd(d,l), resultShouldBe);
    d = {"a":3};
    l = {"a":4,"c":5};
    resultShouldBe = {"a":4,"c":5};
    t.deepEqual(utils.objectadd(d,l), resultShouldBe);
});

test('randomCity works',function(t){
	t.plan(2);
	var mod = [{"developersPerCity":{"Dublin":1}}];
	t.equals(utils.randomCity(mod[0]),"Dublin");
	var mod2 = [{"developersPerCity":{"Dublin":1,"Cork":4}}];
	var city = utils.randomCity(mod2[0]);
	t.ok(city == "Dublin" || city == "Cork" ,'picks a city');
});

test('calculateCost works',function(t){
	t.plan(1);
	var pro = {"modules":[{"cost":1},{"cost":3}]};
	t.equals(utils.calculateCost(pro),4);
});
