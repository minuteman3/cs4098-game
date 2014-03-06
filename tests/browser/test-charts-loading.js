var test = require('tape');
var pt  = require('../../js/index.js');

test('PT can be accessed', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.initialiseGame();
  });
});

test('Canvas is supported', function (t) {
  t.plan(1);
  t.doesNotThrow(function () {
    pt.endGame();
  });
});
