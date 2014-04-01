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
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('projectdescription', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('selectProject', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('startGame', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

test('startSimulation', function (t) {
    t.plan(1);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});
});

