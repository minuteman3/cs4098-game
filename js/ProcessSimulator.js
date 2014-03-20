var config = require('./../config/client-config.json');
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

function start(_modules, _cities, _updateFunc, _doneFunc){
    modules = _modules;
    cities = _cities;
    updateFunc = _updateFunc;
    doneFunc = _doneFunc;
    intervalID = setInterval(timerLoop, config.timerDuration);
    return intervalID;
}

function unpause(){
    if (paused && modules && cities && updateFunc && doneFunc) {
        paused = false;
        intervalID = setInterval(timerLoop, config.timerDuration);
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
    doneFunc = null;
    updateFunc = null;
    intervalID = null;
    paused = false;
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop,
    unpause:unpause,
};
