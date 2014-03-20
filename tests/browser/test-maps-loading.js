var test = require('tape');
var app  = require('../../js/index.js');
var $ = require('jquery');
var maps = require('../../js/maps.js');


test('localStorage is enabled', function (t) {
  t.plan(2);
  t.doesNotThrow(function () {
    window.localStorage.setItem(
            'test-local-storage',
            "hi");
  });
  t.equal(window.localStorage.getItem('test-local-storage'), "hi");
});

test('pt can be accessed', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.initialiseGame();
  });
});

test('browser supports forEach', function(t){
  t.plan(2);
  var a = ["a","b","c"];
  t.doesNotThrow(function(){
    a.forEach(function(b, i, arr){
      b = b.toUpperCase();
      arr[i] = b;
    });
  });
  t.deepEqual(a,["A","B","C"]);
});

test('map build works', function(t){
    t.plan(2);

    $("<div>", {
        id: "map"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        maps.buildmap();
    });
   
    var map = $('.jvectormap-container');
    t.ok(map, "jvectormap is inserted");

    $("#map").remove();
});

test('map resize works', function(t){
    t.plan(1);

    $("<div>", {
        id: "map"
    }).appendTo("body");
    
    t.doesNotThrow(function(){
        maps.resizemap(95);
    });

    $("#map").remove();
});
