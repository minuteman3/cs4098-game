var test = require('tape');
var app  = require('../../js/index.js');

test('PT can be accessed', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.initialiseGame();
  });
});

test('Canvas is supported', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.addChartContainer();
    pt.generateCharts("gameover",[[0,4,8],[0,100],[0,25,100]]);
  });
});
