var config = require('./clientConfig.json');
var Module = require('./Module.js');

var modules = null;
var doneFunc = null;
var intervalID = null;
var paused = false;

function timerLoop(){
    var done = true;

    modules.forEach(function(module) {
        module.advance();
        console.log("Module % completed: "+module.getPercentComplete());
        done = done && module.done();
    });

    if(done){
        stop();
        doneFunc();
    }
}

function start(_modules, _doneFunc){
    modules = _modules;
    doneFunc = _doneFunc;
    intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    return intervalID;
}

function pause(){
    if(paused){
        paused = !paused;
        intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    } else {
        paused = !paused;
        clearInterval(intervalID);
    }
}

function stop(){
    clearInterval(intervalID);
    modules = null;
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop
};