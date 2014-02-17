var test = require('tape');
var Module = require('../lib/Module.js');

test('Module advancement works', function(t) 
{
    t.plan(1);

    var mod = new Module(3);
    
    mod.advance();

    t.equals(3, mod.getPercentComplete());
});

