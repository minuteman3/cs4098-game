var test = require('tape');
var app  = require('../../js/index.js');
var $ = require('jquery');
var maps = require('../../js/maps.js');


test('maps: localStorage is enabled', function (t) {
  t.plan(2);
  t.doesNotThrow(function () {
    window.localStorage.setItem(
            'test-local-storage',
            "hi");
  });
  t.equal(window.localStorage.getItem('test-local-storage'), "hi");
});

test('maps: pt can be accessed', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.initialiseGame();
  });
});

test('maps: browser supports forEach', function(t){
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

test('maps: buildmap works', function(t){
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

test('maps: resizemap works', function(t){
  t.plan(1);

  $("<div>", {
      id: "map"
  }).appendTo("body");

  // t.doesNotThrow(function(){
  //     maps.resizemap(95);
  // });

  t.equals(1,0);

  $("#map").remove();
});

test('maps: clearMapMarkers works', function(t){
  t.plan(1);

  $("<div>", {
      id: "map"
  }).appendTo("body");

  // t.doesNotThrow(function(){
  //     maps.resizemap(95);
  // });

  t.equals(1,0);

  $("#map").remove();
});

test('maps: fixOverLap works', function(t){
  t.plan(2);

  var a = $("<div>", {
      id: "lab"
  });
  var b = $("<div>", {
      id: "lab2"
  });
  maps.fixOverLap(0,a);
  maps.fixOverLap(4,b);
  setTimeout(function(){
    t.equals(a.css('margin-left'),a.width()+25+"px");
    t.equals(b.css('margin-left'),"-10px");
  },0);

});

test('maps: runState works', function(t){
  t.plan(1);

  $("<div>", {
      id: "map"
  }).appendTo("body");

  // t.doesNotThrow(function(){
  //     maps.resizemap(95);
  // });

  t.equals(1,0);

  $("#map").remove();
});
