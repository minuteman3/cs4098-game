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
