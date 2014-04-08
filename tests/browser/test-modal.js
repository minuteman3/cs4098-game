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

test('modal: makeChoices works', function(t){
    t.plan(3);

    var e = modal.makeChoices();

    t.equals(e,'<p></p>'+
        '<div class="modal-options">'+
            '<button class="btn-action" onclick="pt.selectType(0)"  >'+
                'Option 1'+
            '</button>'+
        '</div>');
    var f = modal.makeChoices([{"name":"Option 1","funct":""}],"hello");

    t.equals(f,'<p>hello</p>'+
        '<div class="modal-options">'+
            '<button class="btn-action" onclick="pt.selectType(0)"  >'+
                'Option 1'+
            '</button>'+
        '</div>');
    var g = modal.makeChoices([{"name":"Option 1","funct":""}],"hello","other");

    t.equals(g,'<p>hello</p>'+
        '<div class="modal-options">'+
            '<button class="other" onclick="pt.selectType(0)"  >'+
                'Option 1'+
            '</button>'+
        '</div>');
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

test('modal: makeTypeChoice works', function(t){
    t.plan(2);

    $("<div>", {
        id: "content"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        modal.makeTypeChoice("test", ["test"]);
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

test('modal: endGame works', function(t){
  t.plan(2);

    $("<div>", {
        id: "content"
    }).appendTo("body");

    var p = {
        "name":"test",
        "duration":30,
        "budget":300,
        "revenue": {
            "amount":1000,
            "months":5
        }
    };

    t.doesNotThrow(function(){
        modal.endGame(0,200,p,[]);
    });

    t.ok($('#results'),"");

    $("#content").remove();
});



test('modal: events work', function(t){
  t.plan(1);

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
        },
        "module":{
            "name": "test"
        }
    };
    t.doesNotThrow(function(){
        modal.showEvent(ev,3);
    },'showEvent');
    
    $("#content").remove();
});
