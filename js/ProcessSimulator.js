var config = require('./clientConfig.json');
var Module = require('./Module.js');

var modules = null;
var doneFunc = null
var intervalID = null;

var timerLoop = function()
{
    var done = true;

    modules.forEach(function(module) {
        module.advance();
        done = done && module.done();
    });

    if(done)
    {
        clearInterval(intervalID);
        doneFunc();
    }
}

var startProcessSim = function(_modules, _doneFunc)
{
    modules = _modules;
    doneFunc = _doneFunc;
    intervalID = setInterval(timerLoop, config.TIMER_DURATION);

    return intervalID;
}

module.exports.startProcessSim = startProcessSim;
