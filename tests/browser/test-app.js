var test = require('tape');
var pt = require('./../../js/app.js');

test('app: pt can be accessed', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('app: endGame', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('app: projectdescription', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('app: selectProject', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('app: startGame', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('app: startSimulation', function (t) {
    t.plan(1);
	t.equals(1,0);
});

