var test = require('tape');
var pt = require('./../../js/app.js');
var $ = require('jquery');
window.$ = $;

test('app:', function (t) {
    t.plan(7);
	
	$('<audio>', {
        id: 'music'
    }).appendTo('body');

	$('<audio>', {
        id: 'music-end'
    }).appendTo('body');

    $('<audio>', {
        id: 'event'
    }).appendTo('body');

    $('<audio>', {
        id: 'eventmusic'
    }).appendTo('body');

	t.doesNotThrow(function(){
		pt.initialiseGame();
	},"audio is supported");

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

	t.doesNotThrow(function(){
		pt.startGame(0);
	}, "startGame");

	t.doesNotThrow(function(){
		pt.endGame(0);
	}, "endGame");


    $('#sidebar').remove();
});
