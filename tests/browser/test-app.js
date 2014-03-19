var test = require('tape');
var pt = require('./../../js/app.js');

test('pt can be accessed', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});