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

test('modal: events work', function(t){
  t.plan(5);

    $("<div>", {
        id: "content"
    }).appendTo("body");

    var ev = {
        "conditions": {},
        "message": "The manager at $site has slipped on a banana peel and died. What do you do?",
        "effects": {
            "morale": -20
        },
        "actions": [
            {
                "message": "Wing it",
                "effects": {
                    "stall": 4
                }
            }
        ],
        "city": {
            "name": "Dublin"
        }
    };
    t.doesNotThrow(function(){
        modal.showEvent(ev,3);
    },'showEvent');

    t.doesNotThrow(function(){
        var es = modal.getEvents();
        var evt = es[es.length-1];
        ev.message = ev.message.replace("$site",ev.city.name);
        t.deepEquals(evt,ev);
    },'showEvent event added to array');

    t.doesNotThrow(function(){
        modal.setEventAction(0);
        var es = modal.getEvents();
        var evt = es[es.length-1];
        t.equals(evt.mitigation,ev.actions[0]);
    },'showEvent event mitigation saved');



    $("#content").remove();
});