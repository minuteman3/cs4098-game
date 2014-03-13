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
    t.equals(utils.revenue(12,project),180000);
});

test('commas get inserted into money numbers',function(t){
	t.plan(2);
	t.equals(utils.commafy(123456789),"123,456,789");
	t.equals(utils.commafy(12345.32),"12,345.32");
});