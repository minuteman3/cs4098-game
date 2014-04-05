var test = require('tape');
var pt = require('./../../js/app.js');
var $ = require('jquery');
window.$ = $;

test('app: pt can be accessed', function (t) {
    t.plan(5);
	t.doesNotThrow(function(){
		pt.initialiseGame();
	});

	t.doesNotThrow(function(){
		pt.selectProject();
	},"");
	t.ok($('#modal'),"");
	t.ok($('#modal-content'),"selectProject()");

	$('<div>', {
        id: 'project-duration'
    }).appendTo('body');

	pt.projectdescription(0);
	var des = $('#project-duration').html();
    setTimeout(function(){
		t.equals(des,"Due in: 8 weeks","projectdescription()");
    },0);

    $('#project-duration').remove();
});

test('app: startGame', function (t) {
    t.plan(1);

    t.doesNotThrow(function(){
		pt.startGame(0);
    });
});


test('app: startSimulation', function (t) {
    t.plan(1);
    t.doesNotThrow(function(){
		pt.startSimulation(0);
    });
});

test('app: endGame', function (t) {
    t.plan(1);

    t.doesNotThrow(function(){
		pt.endGame(0);
    });
});
