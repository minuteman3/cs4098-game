var test = require('tape');

var ProcessSim = require("../lib/ProcessSimulator.js");
var Module = require("../lib/Module.js");

test("process simulator works", function(t) {
    t.plan(1);
     
    var modules = [new Module(20), new Module(30)];
    ProcessSim.startProcessSim(modules, function() {
        var done = true;

        modules.forEach(function(module) {
            done = done && module.done();
        });

        t.ok(done, 'all modules done')

    });
});
