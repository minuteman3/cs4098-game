var modal = require("../../js/modal.js");
var test = require('tape');
var $ = require('jquery');

test('modals work', function(t){
    t.plan(4);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.showmodal("asasdads", true);
    });

    t.ok($("#modal"));

    t.doesNotThrow(function(){
        modal.hidemodal();
    });

    t.equal($("#modal").css("display"), "none");

    $("#content").remove();
});

test('dialog works', function(t){
    t.plan(2);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.dialog("asdasd");
    });

    t.ok($("#modal"));

    $("#content").remove();
});

test('pause menu works', function(t){
    t.plan(3);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.pause();
    });

    t.ok($("#modal"));

    t.notEqual($("#modal").css("display"), "none");

    $("#content").remove();
});
