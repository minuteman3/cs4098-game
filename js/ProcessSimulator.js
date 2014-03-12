var config = require('./clientConfig.json');
var Module = require('./Module.js');

var modules = null;
var cities = null;
var doneFunc = null;
var updateFunc = null;
var intervalID = null;
var paused = false;

function timerLoop(){
    var done = true;

    modules.forEach(function(module) {
        module.advance(cities);
        done = done && module.done();
    });
    updateFunc(modules,cities);
    if(done){
        if(doneFunc){
            doneFunc(modules);
        }
        stop();
    }
}

function start(_modules,_cities, _updateFunc, _doneFunc){
    modules = _modules;
    cities = _cities;
    updateFunc = _updateFunc;
    doneFunc = _doneFunc;
    intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    return intervalID;
}

function unpause(){
    if (paused) {
        paused = false;
        intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    }
}

function pause(){
    if(paused){
        unpause();
    } else {
        paused = true;
        clearInterval(intervalID);
    }
}

function stop(){
    clearInterval(intervalID);
    modules = null;
    cities = null;
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop,
    unpause:unpause,
};
