var test = require('tape');
var $ = require('jquery');
var maps = require('../../js/maps.js');
window.maps = maps;

test('maps: localStorage is enabled', function (t) {
  t.plan(2);
  t.doesNotThrow(function () {
    window.localStorage.setItem(
            'test-local-storage',
            "hi");
  });
  t.equal(window.localStorage.getItem('test-local-storage'), "hi");
  window.localStorage.clear();
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

test('maps:', function(t){
    t.plan(6);
    //setup
    $("<div>", {
        id: "map"
    }).appendTo("body");
    var map;
    
    //buildmap
    t.doesNotThrow(function(){
        map = maps.buildmap();
    });
    var mapc = $('.jvectormap-container');
    t.ok(mapc, "buildmap()");

    // resizemap
    var mh = $('#map').css('height');
    maps.resizemap(30);
    var mh2 = $('#map').css('height');
    t.ok(mh>mh2,"resizemap()");

    //runState
    t.doesNotThrow(function(){
      maps.runState([1,2,0,0,1]);
    },"runState()");

    //clearMapMarkers
    map.setSelectedMarkers([1,2]);
    t.deepEqual(map.getSelectedMarkers(),["1","2"],"clearMapMarkers()");
    maps.clearMapMarkers();
    t.deepEqual(map.getSelectedMarkers(),[],"clearMapMarkers()");


    $("#map").remove();
});
