var test = require('tape');
var app  = require('../../js/index.js');
var $ = require('jquery');

test('addChartContainer works', function(t){
    t.plan(2);
    
    t.doesNotThrow(function(){
        pt.addChartContainer();
    });
   
    var map = $('#gameover');
    t.ok(map, "chart container is inserted");

    $("#gameover").remove();
});

test('Canvas is supported', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.addChartContainer();
    var project = {
      duration:3,
      modules: [
      {name:"Dublin"},
      {name:"London"}
      ]
    };
    var chart = 
    pt.generateCharts("gameover",[[0,4,8],[0,100],[0,25,100]],project,3);
    // function generateCharts(loc, chartData, project, time)
  },'generateCharts works');
    $("#gameover").remove();
});
