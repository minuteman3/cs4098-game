var test = require('tape');
var pt = require('./../../js/app.js');

test('pt can be accessed', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('endGame', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('projectdescription', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('selectProject', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('startGame', function (t) {
    t.plan(1);
	t.equals(1,0);
});

test('startSimulation', function (t) {
    t.plan(1);
	t.equals(1,0);
});

