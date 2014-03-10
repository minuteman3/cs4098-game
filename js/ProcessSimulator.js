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
        stop();
        doneFunc();

    }
}

function start(_modules,_cities, _updateFunc,_doneFunc){
    modules = _modules;
    doneFunc = _doneFunc;
    updateFunc = _updateFunc;
    cities = _cities;
    intervalID = setInterval(timerLoop, config.TIMER_DURATION);
    return intervalID;
}

function unpause(){
    paused = false;
     intervalID = setInterval(timerLoop, config.TIMER_DURATION);
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
    cities = null;
}

module.exports = {
    start: start,
    pause: pause,
    stop: stop,
    unpause:unpause,
};