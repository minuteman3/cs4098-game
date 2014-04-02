var modal = require("../../js/modal.js");
var test = require('tape');
var $ = require('jquery');

test('modal:', function(t){
    t.plan(4);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.showmodal("asasdads", true);
    },'showmodal');

    t.ok($("#modal"),"Modal is in the DOM");

    t.doesNotThrow(function(){
        modal.hidemodal();
    },'hidemodal');

    t.equal($("#modal").css("display"), "none");

    $("#content").remove();
});

test('modal: dialog works', function(t){
    t.plan(2);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.dialog("asdasd");
    });

    t.ok($("#modal"), "Modal is in the DOM");

    $("#content").remove();
});

test('modal: pause works', function(t){
    t.plan(3);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.pause();
    });

    t.ok($("#modal"), "Modal is accessible");

    t.notEqual($("#modal").css("display"), "none");

    $("#content").remove();
});

test('modal: makeChoices works', function(t){
  t.plan(1);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    t.equals(1,0);
    
    $("#content").remove();

});

test('modal: endGame works', function(t){
  t.plan(1);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    t.equals(1,0);
    
    $("#content").remove();

});

//charts tested in test-charts-loading.js