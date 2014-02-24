var test = require('tape');
var app  = require('../../js/index.js');


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
