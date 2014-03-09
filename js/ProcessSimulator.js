var config = require('./clientConfig.json');
var Module = require('./Module.js');

var modules = null;
var doneFunc = null;
var intervalID = null;

function timerLoop(){
    var done = true;

    modules.forEach(function(module) {
        // console.log("Module was completed: "+module.getPercentComplete());
        module.advance();
        // console.log("Module now completed: "+module.getPercentComplete());
        done = done && module.done();
    });

    if(done){
        clearInterval(intervalID);
        modules = null;
        doneFunc();
    }
}

function startProcessSim(_modules, _doneFunc){
    modules = _modules;
    doneFunc = _doneFunc;
    intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    return intervalID;
}

function pauseProcessSim(){
    if(modules === null){
        startProcessSim();
    } else {
        clearInterval(intervalID);
    }
}

module.exports = {
    startProcessSim: startProcessSim,
    pauseProcessSim: pauseProcessSim
};